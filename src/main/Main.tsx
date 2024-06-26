import Navbar from "./components/Navbar.tsx";
import {useEffect, useRef} from "react";
import StageWrapper from "./components/StageWrapper.tsx";
import {useDispatch} from "react-redux";
import {layoutActions} from "../store/layoutSlice.ts";
import {MainPageConfig} from "./MainPageConfig.tsx";

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
      {MainPageConfig.map((value, i) => (
        <StageWrapper stage={i} key={value.name}/>
      ))}
    </>
  )
}