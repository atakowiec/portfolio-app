import {FaHome} from "react-icons/fa";
import Hero from "./hero/Hero.tsx";
import {BsStack} from "react-icons/bs";
import TechStack from "./techstack/TechStack.tsx";

export const MainPageConfig = [
  {
    name: "Main",
    icon: <FaHome/>,
    component: Hero,
    parts: 7
  },
  {
    name: "Tech Stack",
    icon: <BsStack/>,
    component: TechStack,
    parts: 1
  },
  // {
  //   name: "Projects",
  //   icon: <FaDiagramProject/>,
  //   component: Title,
  //   parts: 1
  // },
]