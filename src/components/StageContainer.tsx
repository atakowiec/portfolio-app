import {ReactNode} from "react";
import style from "../style/App.module.scss"
import {useStageStyle} from "../store/stateUtil.ts";

interface StageContainerProps {
  children: ReactNode,
  stage: number
  className?: string
}

export default function StageContainer(props: StageContainerProps) {
  return (
    <div className={`${style.stageContainer} ${props.className}`} style={{zIndex: props.stage, ...useStageStyle(props.stage)}}>
      {props.children}
    </div>
  )
}