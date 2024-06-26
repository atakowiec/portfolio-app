import AppearingBox from "../components/AppearingBox.tsx";
import {Row} from "react-bootstrap";
import style from "./TechStack.module.scss";
import SingleTech from "./SingleTech.tsx";
import {TechStackElement} from "./TechStackConfig.tsx";

interface TechStackSectionProps {
  title: string;
  techStack: TechStackElement[];
  part: number;
}

export default function TechStackSection(props: TechStackSectionProps) {
  return (
    <div>
      <AppearingBox as={"h2"} delay={0}>
        {props.title}
      </AppearingBox>
      <Row className={`${style.languages} col-12 col-md-8 mx-auto`}>
        {props.techStack.map((element, i) => (
          <SingleTech key={element.name}
                      name={element.name}
                      level={element.level}
                      icon={element.icon}
                      index={i}/>
        ))}
      </Row>
    </div>
  )
}