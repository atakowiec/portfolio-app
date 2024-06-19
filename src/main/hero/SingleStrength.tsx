import style from "./Hero.module.scss"
import {useEffect, useRef, useState} from "react";

interface SingleStrengthProps {
  strength: string;
  index: number;
  last: boolean;
  setWidth: (width: string) => void;
}

export default function SingleStrength(props: SingleStrengthProps) {
  const {index, last} = props;
  const elementRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    let innerTop = 100;

    if (scrollY >= index * 100 - 50 && scrollY <= index * 100 + 50) {
      // innerTop = Math.max(0, Math.min(100, -100 * (scrollY - index * 100 + 50)))
      innerTop = 0;
    } else if (scrollY < index * 100 - 50) {
      // innerTop = Math.max(-100, Math.min(0, -100 * (scrollY - index * 100 - 50)))
      innerTop = 100;
    } else if (scrollY > index * 100 + 50) {
      innerTop = -100;
    }

    if (last) {
      innerTop = Math.max(innerTop, 0)
    }

    if (index == 0) {
      innerTop = Math.min(innerTop, 0)
    }

    if (innerTop == 0) {
      if(!elementRef.current?.offsetWidth || props.strength === "") {
        props.setWidth("0")
      } else {
        props.setWidth(`calc(${elementRef.current.offsetWidth}px + 0.33em)`)
      }
    }

    setTop(innerTop)
  }, [scrollY, index, last, props]);

  return (
    <div className={style.strength} style={{top: `${top}px`}} ref={elementRef}>
      {props.strength}
    </div>
  )
}