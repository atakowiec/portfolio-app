import {Dispatch, ElementType, ReactNode, SetStateAction, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

interface ApearingBoxProps {
  as: ElementType,
  delay?: number,
  durationMs?: number,
  children: ReactNode,
  className?: string,
  setShowedFunction?: Dispatch<SetStateAction<boolean>>
}

export default function AppearingBox(props: ApearingBoxProps) {
  const {ref, inView} = useInView();
  const [showed, setShowed] = useState(false)
  const duration = props.durationMs ?? 400

  useEffect(() => {
    if (!inView) {
      setShowed(false)
      return
    }

    if (showed) {
      return
    }

    const timeout = setTimeout(() => {
      setShowed(true)
      props.setShowedFunction?.(true)
    }, props.delay ?? 0)

    return () => clearTimeout(timeout)
  }, [inView])

  useEffect(() => {
    props.setShowedFunction?.(showed)
  }, [showed]);

  return (
    <props.as className={props.className}
              ref={ref}
              style={{opacity: showed && inView ? 1 : 0, transition: `opacity ${duration}ms ease-in-out`}}>
      {props.children}
    </props.as>
  )
}