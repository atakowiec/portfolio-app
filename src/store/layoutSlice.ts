import {createSlice} from "@reduxjs/toolkit";

export interface LayoutState {
  stage: number
}

const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    stage: 0
  } as LayoutState,
  reducers: {
    setStage(state, action) {
      state.stage = action.payload
    }
  }
})

export default layoutSlice

export const layoutActions = layoutSlice.actions