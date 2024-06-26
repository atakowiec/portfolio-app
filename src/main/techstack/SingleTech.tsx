import {ReactNode, useEffect, useState} from "react";
import style from "./TechStack.module.scss";
import AppearingBox from "../components/AppearingBox.tsx";

interface SingleTechProps {
  name: string;
  icon: ReactNode,
  level: number,
  index: number
}

export default function SingleTech(props: SingleTechProps) {
  const [showedLevel, setShowedLevel] = useState(-1)
  const [showed, setShowed] = useState(false)

  useEffect(() => {
    if(!showed) {
      setShowedLevel(-1)
    }

    if (showedLevel >= props.level || !showed) {
      return
    }

    const timeout = setTimeout(() => {
      setShowedLevel(showedLevel + 1)
    }, 200)

    return () => clearTimeout(timeout)
  }, [showedLevel, showed, props.level])

  return (
    <AppearingBox as={"div"} delay={props.index * 100} className={`${style.language} col-6 col-md-3`} setShowedFunction={setShowed}>
      <div className={style.name}>
        {props.icon}
        <div>
          {props.name}
        </div>
      </div>
      <div className={style.level}>
        {Array.from({length: 5}, (_, i) => (
          <div key={i} className={`${style.levelDot} ${i < showedLevel ? style.active : ""}`}/>
        ))}
      </div>
    </AppearingBox>
  )
}