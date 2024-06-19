import {configureStore} from "@reduxjs/toolkit";
import layoutSlice, {LayoutState} from "./layoutSlice.ts";

export interface State {
  layout: LayoutState
}

const store = configureStore<State>({
  reducer: {
    layout: layoutSlice.reducer
  }
});

export default store