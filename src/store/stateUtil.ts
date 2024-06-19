import {useSelector} from "react-redux";
import {State} from "./index.ts";

export const useAppSelector = useSelector<State> as <T>(selector: (state: State) => T) => T;

export function useStageStyle(stage: number) {
  const currentStage = useAppSelector(state => state.layout.stage)

  if (currentStage == stage) return {
    top: 0,
  }

  if (currentStage > stage) return {
    top: "-150%",
    transform: "scale(0.2)",
  }

  return {
    top: "150%",
    transform: "scale(1.8)",
  }
}