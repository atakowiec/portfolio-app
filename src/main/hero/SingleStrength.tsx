import style from "./Hero.module.scss"
import {useEffect, useRef, useState} from "react";
import {useAppSelector} from "../../store/stateUtil.ts";

interface SingleStrengthProps {
  strength: string;
  index: number;
  last: boolean;
  setWidth: (width: string) => void;
}

export default function SingleStrength(props: SingleStrengthProps) {
  const layoutState = useAppSelector(state => state.layout)
  const {index, last} = props;
  const elementRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    if(layoutState.stage != 0) return
    let innerTop;

    if (layoutState.part == props.index) {
      innerTop = 0;
    } else if (layoutState.part < props.index) {
      innerTop = 100;
    } else {
      innerTop = -100;
    }

    if (last) {
      innerTop = Math.max(innerTop, 0)
    }

    if (index == 0) {
      innerTop = Math.min(innerTop, 0)
    }

    // set strenghs box's width to the width of the current selected strength
    if (innerTop == 0) {
      // handle empty strength
      if (!elementRef.current?.offsetWidth || props.strength === "") {
        props.setWidth("0")
      } else {
        props.setWidth(`calc(${elementRef.current.offsetWidth}px + 0.33em)`)
      }
    }

    setTop(innerTop)
  }, [index, last, props, layoutState.part, layoutState.stage]);

  return (
    <div className={style.strength} style={{top: `${top}px`}} ref={elementRef}>
      {props.strength}
    </div>
  )
}