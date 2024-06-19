import style from "../main/style/Main.module.scss"
import {RefObject, useEffect, useRef, useState} from "react";
import {getColorBetween, random, randomPointOutsideRect} from "../util/util.ts";

export default function BackgroundEffect() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [nodeCount, setNodeCount] = useState<number>(0)

  useEffect(() => {
    const onResize = () => {
      const container = containerRef.current
      if (!container) {
        return;
      }
      const width = container.offsetWidth
      const height = container.offsetHeight

      setNodeCount(Math.round((width * height) / 68000));
    }

    onResize()

    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, []);

  return (
    <div className={style.backgroundEffectContainer} ref={containerRef}>
      {Array.from({length: nodeCount}).map((_, i) => <Node key={i} index={i} containerRef={containerRef}/>)}
    </div>
  )
}

function Node({containerRef, index}: { containerRef: RefObject<HTMLDivElement>, index: number }) {
  const [path, setPath] = useState<string>("")
  const [waiting, setWaiting] = useState<boolean>(true)
  const [color, setColor] = useState<string>("")
  const [pulseDuration, setPulseDuration] = useState<number>(0)
  const movementDurationRef = useRef<number>(random(15) + 15)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWaiting(false)
    }, index * 800)

    return () => clearTimeout(timeout)
  }, []);

  useEffect(() => {
    if (waiting) {
      return;
    }

    function updatePath() {
      const container = containerRef.current
      if (!container) {
        return;
      }
      const width = container.offsetWidth
      const height = container.offsetHeight

      const [startX, startY] = randomPointOutsideRect(width, height)
      const [endX, endY] = randomPointOutsideRect(width, height)

      const x = Math.round(Math.random() * width)
      const y = Math.round(Math.random() * height)
      const path = `M${startX} ${startY} S ${x} ${y}, ${endX} ${endY}`
      setPath(path)
      setColor(getColorBetween("#AA21FF", "#C03939"))
      setPulseDuration(random(7) + 3)
    }

    updatePath()
    const interval = setInterval(updatePath, movementDurationRef.current * 1000)

    return () => clearInterval(interval)
  }, [containerRef, waiting])

  if (!path)
    return null

  return (
    <div className={style.node}
         style={{
           offsetPath: `path("${path}")`,
           boxShadow: `0 0 120px 35px ${color}`,
           animation: `${style.moveAlongCurve} ${movementDurationRef.current}s linear infinite, ${style.pulse} ${pulseDuration}s linear infinite`
         }}/>
  )
}

