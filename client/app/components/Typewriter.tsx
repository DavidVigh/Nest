"use client";
import React, { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number; // ms per character
  start?: boolean;
  className?: string;
  cursorClassName?: string;
};

export default function Typewriter({ text, speed = 100, start = true, className = "", cursorClassName = "" }: TypewriterProps) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (!start) return undefined;

    if (index < text.length) {
      timer = setTimeout(() => {
        setDisplay((d) => d + text.charAt(index));
        setIndex((i) => i + 1);
      }, speed);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [index, start, text, speed]);

  // blinking cursor
  useEffect(() => {
    if (!start) return undefined;
    const iv = setInterval(() => setShowCursor((s) => !s), 500);
    return () => clearInterval(iv);
  }, [start]);

  return (
    <span className={className} aria-live="polite">
      {display}
      <span className={cursorClassName} aria-hidden>
        {showCursor ? "|" : "\u00A0"}
      </span>
    </span>
  );
}
