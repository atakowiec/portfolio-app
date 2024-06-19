import style from "./Hero.module.scss"
import BackgroundEffect from "../../components/BackgroundEffect.tsx";
import HoverableLetters from "./HoverableLetters.tsx";
import {useState} from "react";
import SingleStrength from "./SingleStrength.tsx";
import {Row} from "react-bootstrap";
import {useStageStyle} from "../../store/stateUtil.ts";

const STRENGTHS = [
  "",
  "Skilled",
  "Proficient",
  "Experienced",
  "Enthusiastic",
  "Resourceful",
  "Reliable",
]

export default function Hero() {
  const [strengthsWidth, setStrengthsWidth] = useState<string>("0")

  return (
    <div className={style.hero} style={useStageStyle(0)}>
      <Row className={"col-12 col-md-10 col-xxl-8 mx-auto justify-content-center"}>
        <div className={`${style.photo} col-12 col-md-auto text-center`}>
          <img src={"/assets/avatar.jpg"} alt={"My Photo"}/>
        </div>
        <div className={`col-12 col-md-auto align-content-center`}>
          <HoverableLetters text={"Mateusz Cięszczyk"} className={style.names}/>
          <div className={style.position}>
            <div className={style.strengths} style={{width: strengthsWidth}}>
              {STRENGTHS.map((strength, i) => (
                <SingleStrength key={i}
                                strength={strength}
                                index={i}
                                last={i + 1 == STRENGTHS.length}
                                setWidth={setStrengthsWidth}/>
              ))}
            </div>
            <div>
              Fullstack Developer
            </div>
          </div>
        </div>
      </Row>
      <BackgroundEffect/>
    </div>
  )
}