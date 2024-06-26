import style from "./TechStack.module.scss"
import TechStackSection from "./TechStackSection.tsx";
import {FRAMEWORKS, LANGUAGES, TECHNOLOGIES} from "./TechStackConfig.tsx";
import {useAppSelector} from "../../store/stateUtil.ts";

export default function TechStack() {
  const currentPart = useAppSelector(state => state.layout.part)

  function getSectionStyle(part: number) {
    if (currentPart === part) {
      return {opacity: 1, transform: "translateY(0) scale(1)", zIndex: 1};
    } else {
      return {opacity: 0, transform: "translateY(50px) scale(0.9)", zIndex: 0};
    }
  }

  return (
    <>
      <div className={style.container} style={getSectionStyle(0)}>
        <TechStackSection title={"Languages"} techStack={LANGUAGES} part={0}/>
      </div>
      <div className={style.container} style={getSectionStyle(1)}>
        <TechStackSection title={"Frameworks"} techStack={FRAMEWORKS} part={1}/>
        <TechStackSection title={"Technologies"} techStack={TECHNOLOGIES} part={1}/>
      </div>
    </>
  )
}