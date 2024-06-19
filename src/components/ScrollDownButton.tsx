import style from "../style/App.module.scss"
import {IoIosArrowDown} from "react-icons/io";

interface ScrollDownButtonProps {
  to: number
  behavior?: "auto" | "smooth" | "instant"
}

export default function ScrollDownButton({to, behavior}: ScrollDownButtonProps) {
  return (
    <div className={style.scrollButtonContainer}>
      <IoIosArrowDown onClick={() => window.scrollTo({top: to, behavior: behavior})}/>
    </div>
  )
}