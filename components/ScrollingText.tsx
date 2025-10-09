'use client';

interface ScrollingTextProps {
  text: string;
  maxLength: number;
  className?: string;
}

export function ScrollingText({ text, maxLength, className }: ScrollingTextProps) {
  // For now, just return the text if it's shorter than maxLength, or truncate it.
  const displayText = text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

  return <span className={className}>{displayText}</span>;
}

