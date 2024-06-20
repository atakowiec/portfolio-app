import style from "../style/Main.module.scss"
import {useDispatch} from "react-redux";
import {layoutActions} from "../../store/layoutSlice.ts";
import {useAppSelector} from "../../store/stateUtil.ts";
import {STAGE_CONFIG} from "../Main.tsx";

export default function Navbar() {
  const currentStage = useAppSelector(state => state.layout.stage)
  const dispatch = useDispatch();

  function scrollTo(stage: number) {
    return () => {
      dispatch(layoutActions.setStage(stage))
    }
  }

  return (
    <div className={style.navbar}>
      <div className={style.content}>
        {
          STAGE_CONFIG.map((item, index) => (
            <div key={index} className={`${style.navItem} ${currentStage == index ? style.active : ""}`}
                 onClick={scrollTo(index)}>
              {item.icon}
              <div className={"d-none d-md-block"}>
                {item.name}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}