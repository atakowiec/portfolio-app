import {STAGE_CONFIG} from "../Main.tsx";
import style from "../../style/App.module.scss";
import {useStageStyle} from "../../store/stateUtil.ts";
import ScrollDownButton from "./ScrollDownButton.tsx";

interface StageWrapperProps {
  stage: number,
}

export default function StageWrapper({stage}: StageWrapperProps) {
  const stageData = STAGE_CONFIG[stage]

  return (
    <>
      <div className={`${style.stageContainer}`}
           style={{zIndex: stage, ...useStageStyle(stage)}}>
        {stageData.component()}
      </div>
      <ScrollDownButton/>
    </>
  )
}
