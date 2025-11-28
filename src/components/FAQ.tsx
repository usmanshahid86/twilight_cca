import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useThemeClasses } from '../hooks/useThemeClasses';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

export function FAQ() {
  const themeClasses = useThemeClasses();
  const [faqData, setFaqData] = useState<FAQSection[]>([]);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFAQ = async () => {
      try {
        const response = await fetch('/FAQ.txt');
        const text = await response.text();
        const parsed = parseFAQ(text);
        setFaqData(parsed);
        setLoading(false);
      } catch (error) {
        console.error('Error loading FAQ:', error);
        setLoading(false);
      }
    };

    loadFAQ();
  }, []);

  const parseFAQ = (text: string): FAQSection[] => {
    const sections: FAQSection[] = [];
    const lines = text.split('\n');
    
    let currentSection: FAQSection | null = null;
    let currentQuestion: string | null = null;
    let currentAnswer: string[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines, but save Q&A if we have one
      if (!line) {
        if (currentQuestion && currentAnswer.length > 0 && currentSection) {
          currentSection.items.push({
            question: currentQuestion,
            answer: currentAnswer.join(' ').trim()
          });
          currentQuestion = null;
          currentAnswer = [];
        }
        continue;
      }

      // Check if it's a section title with <FAQ> tag
      if (line.startsWith('<FAQ>')) {
        // Save previous section if exists
        if (currentSection && currentSection.items.length > 0) {
          sections.push(currentSection);
        }
        
        // Save any pending Q&A before starting new section
        if (currentQuestion && currentAnswer.length > 0) {
          if (!currentSection) {
            currentSection = { title: 'General', items: [] };
          }
          currentSection.items.push({
            question: currentQuestion,
            answer: currentAnswer.join(' ').trim()
          });
          currentQuestion = null;
          currentAnswer = [];
        }
        
        // Extract section title (remove <FAQ> tag)
        const sectionTitle = line.replace(/^<FAQ>\s*/, '').trim();
        
        // Start new section
        currentSection = {
          title: sectionTitle,
          items: []
        };
        continue;
      }

      // Check if it's a question (ends with ?)
      if (line.endsWith('?')) {
        // Save previous Q&A if exists
        if (currentQuestion && currentAnswer.length > 0 && currentSection) {
          currentSection.items.push({
            question: currentQuestion,
            answer: currentAnswer.join(' ').trim()
          });
        }
        
        currentQuestion = line;
        currentAnswer = [];
        continue;
      }

      // It's part of an answer
      if (currentQuestion) {
        currentAnswer.push(line);
      } else if (!currentSection) {
        // If we don't have a section yet, create a default one
        currentSection = {
          title: 'General',
          items: []
        };
      }
    }

    // Save last Q&A and section
    if (currentQuestion && currentAnswer.length > 0 && currentSection) {
      currentSection.items.push({
        question: currentQuestion,
        answer: currentAnswer.join(' ').trim()
      });
    }

    if (currentSection && currentSection.items.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  const toggleItem = (sectionIndex: number, itemIndex: number) => {
    const key = `${sectionIndex}-${itemIndex}`;
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedItems(newExpanded);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-400">Loading FAQ...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-8">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${themeClasses.textAccent}`}>
              {section.title}
            </h2>
            
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                const isExpanded = expandedItems.has(key);

                return (
                  <div
                    key={itemIndex}
                    className="border border-gray-700 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800"
                  >
                    <button
                      onClick={() => toggleItem(sectionIndex, itemIndex)}
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="text-base sm:text-lg font-semibold pr-4">
                        {item.question}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className={`w-5 h-5 flex-shrink-0 ${themeClasses.textAccent}`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 flex-shrink-0 ${themeClasses.textAccent}`} />
                      )}
                    </button>
                    
                    {isExpanded && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                        <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

