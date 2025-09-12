"use client";

import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  text: string | string[];
  speed?: number;
  delay?: number;
  backspaceSpeed?: number;
  pauseBetween?: number;
  loop?: boolean;
  onComplete?: () => void;
}

export function useTypewriter({
  text,
  speed = 50,
  delay = 0,
  backspaceSpeed = 30,
  pauseBetween = 1000,
  loop = false,
  onComplete,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isBackspacing, setIsBackspacing] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);
  const textRef = useRef(text);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[currentTextIndex];

  useEffect(() => {
    if (textRef.current !== text) {
      textRef.current = text;
      setDisplayText("");
      setCurrentIndex(0);
      setCurrentTextIndex(0);
      setIsComplete(false);
      setIsBackspacing(false);
      setIsPausing(false);
      isAnimatingRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  }, [text]);

  useEffect(() => {
    if (isAnimatingRef.current) return;

    if (isPausing) {
      isAnimatingRef.current = true;
      timeoutRef.current = setTimeout(() => {
        setIsPausing(false);
        setIsBackspacing(true);
        isAnimatingRef.current = false;
      }, pauseBetween);
      return;
    }

    if (isBackspacing) {
      if (displayText.length > 0) {
        isAnimatingRef.current = true;
        timeoutRef.current = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          isAnimatingRef.current = false;
        }, backspaceSpeed);
      } else {
        setIsBackspacing(false);
        setCurrentIndex(0);
        const nextIndex = (currentTextIndex + 1) % textArray.length;
        setCurrentTextIndex(nextIndex);

        if (nextIndex === 0 && !loop) {
          setIsComplete(true);
          onComplete?.();
        }
      }
      return;
    }

    if (currentIndex < currentText.length) {
      isAnimatingRef.current = true;
      timeoutRef.current = setTimeout(
        () => {
          setDisplayText((prev) => prev + currentText[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
          isAnimatingRef.current = false;
        },
        currentIndex === 0 ? delay : speed
      );
    } else if (currentIndex === currentText.length && !isComplete) {
      if (textArray.length > 1) {
        setIsPausing(true);
      } else {
        setIsComplete(true);
        onComplete?.();

        if (loop) {
          isAnimatingRef.current = true;
          timeoutRef.current = setTimeout(() => {
            setDisplayText("");
            setCurrentIndex(0);
            setIsComplete(false);
            isAnimatingRef.current = false;
          }, pauseBetween);
        }
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      isAnimatingRef.current = false;
    };
  }, [
    currentIndex,
    currentText,
    currentTextIndex,
    displayText.length,
    isBackspacing,
    isPausing,
    speed,
    delay,
    backspaceSpeed,
    pauseBetween,
    loop,
    isComplete,
    onComplete,
    textArray.length,
  ]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { displayText, isComplete };
}
