import {useContext} from "react";
import {StageContext} from "../main/components/StageWrapper.tsx";
import {useAppSelector} from "../store/stateUtil.ts";

export function useStage() {
  return useContext(StageContext)
}

export function useInView() {
  return useStage() == useAppSelector(state => state.layout.stage)
}


