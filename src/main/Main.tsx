import Navbar from "../components/Navbar.tsx";
import Hero from "./hero/Hero.tsx";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {layoutActions} from "../store/layoutSlice.ts";
import TechStack from "./techstack/TechStack.tsx";

const THRESHOLDS = [0, 700, 1400]

export default function Main() {
  const [, setScrollY] = useState<number>(0)
  const dispatch = useDispatch()

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY)
      
      const stage = THRESHOLDS.findIndex(threshold => window.scrollY < threshold) - 1
      dispatch(layoutActions.setStage(stage < 0 ? 10 : stage))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/>
      <TechStack/>
    </>
  )
}