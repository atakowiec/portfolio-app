import Navbar from "../components/Navbar.tsx";
import {useEffect, useRef} from "react";
import TechStack from "./techstack/TechStack.tsx";
import Hero from "./hero/Hero.tsx";
import StageWrapper from "../components/StageWrapper.tsx";
import {useDispatch} from "react-redux";
import {layoutActions} from "../store/layoutSlice.ts";

export const STAGE_CONFIG = [
  {
    name: "Hero",
    component: Hero,
    parts: 7
  },
  {
    name: "TechStack",
    component: TechStack,
    parts: 0
  },
]

const SCROLL_EXCEESS = 20;

export default function Main() {
  const scrollBlocked = useRef(false)
  const dispatch = useDispatch()

  useEffect(() => {
    // set initial scroll to the middle
    window.scrollTo({
      top: SCROLL_EXCEESS / 2,
      behavior: "instant"
    })

    function handleScroll() {
      if (scrollBlocked.current) {
        window.scrollTo({
          top: SCROLL_EXCEESS / 2,
          behavior: "instant"
        })
        return
      }

      const newScroll = window.scrollY

      if (newScroll < 2) {
        dispatch(layoutActions.prevPart())
      } else if (newScroll > SCROLL_EXCEESS - 2) {
        dispatch(layoutActions.nextPart())
      } else {
        return;
      }

      scrollBlocked.current = true
      setTimeout(() => {
        scrollBlocked.current = false
      }, 200)

      window.scrollTo({
        top: SCROLL_EXCEESS / 2,
        behavior: "instant"
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Navbar/>
      {STAGE_CONFIG.map((_, i) => (
        <StageWrapper stage={i} key={i}/>
      ))}
    </>
  )
}