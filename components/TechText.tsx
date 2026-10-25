"use client";

import { useState, type PointerEvent } from "react";

interface TechTextProps {
  lines: string[];
  className?: string;
}

export default function TechText({ lines, className }: TechTextProps) {
  const [activeCharacter, setActiveCharacter] = useState<string | null>(null);
  const accessibleText = lines.join(" ");

  const handlePointerMove = (event: PointerEvent<HTMLHeadingElement>) => {
    const character = (event.target as HTMLElement).closest<HTMLElement>(
      "[data-tech-character]"
    );
    setActiveCharacter(character?.dataset.techCharacter ?? null);
  };

  return (
    <h1
      aria-label={accessibleText}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActiveCharacter(null)}
    >
      {lines.map((line, lineIndex) => (
        <span
          key={`${line}-${lineIndex}`}
          aria-hidden="true"
          className="tech-text-line"
        >
          {Array.from(line).map((character, characterIndex) => {
            const id = `${lineIndex}-${characterIndex}`;
            return (
              <span
                key={id}
                data-active={activeCharacter === id}
                data-character={character === " " ? "\u00a0" : character}
                data-tech-character={id}
                className="tech-text-character"
              >
                {character === " " ? "\u00a0" : character}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
