import {useSelector} from "react-redux";
import {State} from "./index.ts";

export const useAppSelector = useSelector<State> as <T>(selector: (state: State) => T) => T;

export function useStageStyle(stage: number) {
  const currentStage = useAppSelector(state => state.layout.stage)

  if (currentStage == stage) return {
    // top: 0,
    transform: "scale(1)",
    opacity: 1,
  }

  if (currentStage > stage) return {
    // top: "-150%",
    transform: "scale(3)",
    opacity: 0,
  }

  return {
    // top: "150%",
    transform: "scale(0)",
    opacity: 0,
  }
}