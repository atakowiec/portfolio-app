import style from "../style/App.module.scss"
import {IoIosArrowDown} from "react-icons/io";
import {useDispatch} from "react-redux";
import {layoutActions} from "../store/layoutSlice.ts";

export default function ScrollDownButton() {
  const dispatch = useDispatch()

  return (
    <div className={style.scrollButtonContainer}>
      <IoIosArrowDown onClick={() => dispatch(layoutActions.nextStage())}/>
    </div>
  )
}