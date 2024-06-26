import {useSelector} from "react-redux";
import {State} from "./index.ts";

export const useAppSelector = useSelector<State> as <T>(selector: (state: State) => T) => T;
