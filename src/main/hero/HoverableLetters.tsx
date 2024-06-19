import style from "../style/Main.module.scss"
import {CSSProperties, useState} from "react";

interface HoverableLettersProps {
  text: string;
  className?: string;
}

export default function HoverableLetters({text, className = ""}: HoverableLettersProps) {
  const [hovered, setHovered] = useState<number | null>(null)

  function getStyle(i: number): CSSProperties | undefined {
    if (text[i] === " ")
      return {
        width: "0.33em"
      }

    if (hovered === null) return undefined

    const distance = Math.abs(i - hovered)
    if (distance > 3) return undefined

    const offset = Math.max(0, 1 - distance / 3) * 1.5

    return {
      transform: `translateY(-${offset}rem)`,
    }
  }

  return (
    <div className={`${style.hoverableLettersBox} ${className}`}>
      {[...text].map((letter, i) => (
        <div key={i}
             style={getStyle(i)}
             className={style.letter}
             onMouseEnter={() => setHovered(i)}
             onMouseLeave={() => setHovered(null)}>
          {letter}
        </div>
      ))}
    </div>
  )
}