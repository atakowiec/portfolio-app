import {createSlice} from "@reduxjs/toolkit";

import {MainPageConfig} from "../main/MainPageConfig.tsx";

export interface LayoutState {
  stage: number
  part: number
}

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    stage: 0,
    part: 0
  } as LayoutState,
  reducers: {
    setStage(state, action) {
      state.stage = action.payload
      state.part = 0
    },
    nextPart(state) {
      const stageConfig = MainPageConfig[state.stage]

      // if last stage and part
      if(state.stage == MainPageConfig.length - 1 && state.part >= stageConfig.parts - 1) {
        return state
      }

      state.part++
      if (state.part >= stageConfig.parts) {
        state.part = 0
        state.stage++
      }
    },
    prevPart(state) {
      // if first stage and part
      if(state.stage == 0 && state.part == 0) {
        return state
      }

      const prevStageConfig = MainPageConfig[state.stage - 1]

      state.part--
      if (state.part < 0) {
        state.part = prevStageConfig.parts - 1
        state.stage--
      }
    },
    nextStage(state) {
      if (state.stage >= MainPageConfig.length - 1) {
        return state
      }

      state.stage++
      state.part = 0
    }
  }
})

export default layoutSlice

export const layoutActions = layoutSlice.actions