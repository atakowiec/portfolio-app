import style from "../../style/App.module.scss";
import {useAppSelector} from "../../store/stateUtil.ts";
import ScrollDownButton from "./ScrollDownButton.tsx";
import {MainPageConfig} from "../MainPageConfig.tsx";
import {useEffect, useState} from "react";

interface StageWrapperProps {
  stage: number,
}

export default function StageWrapper({stage}: StageWrapperProps) {
  const currentStage = useAppSelector(state => state.layout.stage)
  const stageData = MainPageConfig[stage]
  const [containerStyle, setContainerStyle] = useState({})

  useEffect(() => {
    let timeout: number;
    if (currentStage == stage) {
      setContainerStyle({
        top: 0,
        opacity: 1
      })
      return;
    }

    if (currentStage > stage) {
      setContainerStyle({
        top: 0,
        transform: "scale(3)",
        opacity: 0,
      })

      timeout = setTimeout(() => setContainerStyle({
        top: "-150%",
        transform: "scale(3)",
        opacity: 0,
      }), 300)
    } else {
      setContainerStyle({
        top: 0,
        transform: "scale(0.5)",
        opacity: 0,
      })

      timeout = setTimeout(() => setContainerStyle({
        top: "150%",
        transform: "scale(0.5)",
        opacity: 0,
      }), 300)
    }

    return () => clearTimeout(timeout)
  }, [currentStage, stage]);

  return (
    <>
      <div className={`${style.stageContainer}`}
           style={{zIndex: stage, ...containerStyle}}>
        {stageData.component()}
      </div>
      {MainPageConfig.length - 2 > stage && <ScrollDownButton/>}
    </>
  )
}
