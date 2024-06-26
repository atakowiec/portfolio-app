import {ReactNode} from "react";
import {
  BiLogoCss3, BiLogoDocker, BiLogoGit,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript, BiLogoMongodb,
  BiLogoPhp,
  BiLogoPython, BiLogoReact, BiLogoSpringBoot,
  BiLogoTypescript
} from "react-icons/bi";
import {VscTerminalBash} from "react-icons/vsc";
import {SiNestjs} from "react-icons/si";
import {DiLaravel, DiMysql} from "react-icons/di";


export interface TechStackElement {
  name: string;
  icon: ReactNode;
  level: number;
}

export const LANGUAGES = [
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
    name: "PHP",
    icon: <BiLogoPhp/>,
    level: 3
  }, {
    name: "Python",
    icon: <BiLogoPython/>,
    level: 2
  }, {
    name: "Bash",
    icon: <VscTerminalBash/>,
    level: 2
  },
]

export const FRAMEWORKS = [
  {
    name: "React",
    icon: <BiLogoReact/>,
    level: 4
  },
  {
    name: "Nest.js",
    icon: <SiNestjs/>,
    level: 4
  },
  {
    name: "Spring Boot",
    icon: <BiLogoSpringBoot/>,
    level: 3
  },
  {
    name: "Laravel",
    icon: <DiLaravel/>,
    level: 3
  },
]

export const TECHNOLOGIES = [
  {
    name: "MySQL",
    icon: <DiMysql />,
    level: 4
  },
  {
    name: "Git",
    icon: <BiLogoGit />,
    level: 3
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb />,
    level: 3
  },
  {
    name: "Docker",
    icon: <BiLogoDocker />,
    level: 3
  }
]