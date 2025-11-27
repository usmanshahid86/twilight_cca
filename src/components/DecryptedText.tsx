import { useEffect, useState } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  characters?: string;
  onComplete?: () => void;
}

const DEFAULT_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export function DecryptedText({ 
  text, 
  className = '',
  speed = 45,
  characters = DEFAULT_CHARACTERS,
  onComplete
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>('');
  const [isDecrypting, setIsDecrypting] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        // Build the display text: show decrypted characters up to currentIndex, random for the rest
        const decryptedPart = text.substring(0, currentIndex);
        const randomPart = Array.from({ length: text.length - currentIndex }, () => 
          characters[Math.floor(Math.random() * characters.length)]
        ).join('');
        
        setDisplayText(decryptedPart + randomPart);
        currentIndex++;
      } else {
        // All characters decrypted
        setDisplayText(text);
        setIsDecrypting(false);
        clearInterval(interval);
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, characters, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {isDecrypting && <span className="animate-pulse text-red-500">|</span>}
    </span>
  );
}
