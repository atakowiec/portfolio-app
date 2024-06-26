import style from "../../style/App.module.scss";
import {useAppSelector} from "../../store/stateUtil.ts";
import ScrollDownButton from "./ScrollDownButton.tsx";
import {MainPageConfig} from "../MainPageConfig.tsx";
import {createContext, useEffect, useState} from "react";

interface StageWrapperProps {
  stage: number,
}

export const StageContext = createContext(-1)

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
    } else {
      setContainerStyle({
        top: 0,
        transform: "scale(0.5)",
        opacity: 0,
      })
    }
  }, [currentStage, stage]);

  return (
    <>
      <StageContext.Provider value={stage}>
        <div className={`${style.stageContainer}`}
             style={{zIndex: stage, ...containerStyle}}>
          {stageData.component()}
        </div>
        {MainPageConfig.length - 2 > stage && <ScrollDownButton/>}
      </StageContext.Provider>
    </>
  )
}
