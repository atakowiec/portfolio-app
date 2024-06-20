import {STAGE_CONFIG} from "../main/Main.tsx";
import style from "../style/App.module.scss";
import {useStageStyle} from "../store/stateUtil.ts";

interface StageWrapperProps {
  stage: number,
}

export default function StageWrapper({stage}: StageWrapperProps) {
  const stageData = STAGE_CONFIG[stage]
  // useScrollHandler(stageData.parts, stage);

  return (
    <div className={`${style.stageContainer}`}
         style={{zIndex: stage, ...useStageStyle(stage)}}>
      {stageData.component()}
    </div>
  )
}
