import style from "./TechStack.module.scss"
import {Row} from "react-bootstrap";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoTypescript,
  BiLogoVisualStudio
} from "react-icons/bi";
import SingleTech from "./SingleTech.tsx";
import AppearingBox from "../components/AppearingBox.tsx";

const LANGUAGES = [
  {
    name: "JavaScript",
    icon: <BiLogoJavascript/>,
    level: 4
  }, {
    name: "TypeScript",
    icon: <BiLogoTypescript/>,
    level: 4
  }, {
    name: "HTML5",
    icon: <BiLogoHtml5/>,
    level: 4
  }, {
    name: "CSS3",
    icon: <BiLogoCss3/>,
    level: 4
  }, {
    name: "Java",
    icon: <BiLogoJava/>,
    level: 3
  }, {
    name: "Python",
    icon: <BiLogoPython/>,
    level: 2
  }, {
    name: "VS Code",
    icon: <BiLogoVisualStudio/>,
    level: 2
  },
]

export default function TechStack() {
  return (
    <div className={style.container}>
      <AppearingBox as={"h2"} delay={0}>
        Languages
      </AppearingBox>
      <Row className={`${style.languages} col-12 col-md-8 mx-auto`}>
        {LANGUAGES.map((language, i) => (
          <SingleTech key={language.name}
                      name={language.name}
                      level={language.level}
                      icon={language.icon}
                      index={i}/>
        ))}
      </Row>
    </div>
  )
}