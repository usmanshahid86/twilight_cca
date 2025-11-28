import { useEffect, useState, memo } from 'react';
import { useThemeClasses } from '../hooks/useThemeClasses';

interface TypewriterTextProps {
  text: string | string[];
  className?: string;
  speed?: number;
  delayBetweenTexts?: number;
  onComplete?: () => void;
}

export const TypewriterText = memo(function TypewriterText({ 
  text, 
  className = '',
  speed = 100,
  delayBetweenTexts = 2000,
  onComplete
}: TypewriterTextProps) {
  const themeClasses = useThemeClasses();
  const texts = Array.isArray(text) ? text : [text];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentText = texts[currentTextIndex];

  useEffect(() => {
    if (isDeleting) {
      // Deleting text
      if (currentIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2); // Delete faster than typing

        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentTextIndex((prev) => {
          const nextIndex = (prev + 1) % texts.length;
          return nextIndex;
        });
      }
    } else {
      // Typing text
      if (currentIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // Finished typing current text, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenTexts);

        return () => clearTimeout(timeout);
      }
    }
  }, [currentIndex, currentText, speed, delayBetweenTexts, isDeleting, texts.length]);

  // Reset when text changes
  useEffect(() => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
    setIsTyping(true);
  }, [currentTextIndex]);

  // Call onComplete when first text finishes typing (for subtitle animation)
  useEffect(() => {
    if (currentTextIndex === 0 && !isDeleting && currentIndex === currentText.length && currentIndex > 0 && onComplete) {
      onComplete();
    }
  }, [currentTextIndex, isDeleting, currentIndex, currentText.length, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {isTyping && <span className={`animate-pulse ${themeClasses.textAccent}`}>|</span>}
    </span>
  );
});

