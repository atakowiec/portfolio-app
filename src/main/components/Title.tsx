import style from "../../style/App.module.scss"

export default function Title({children} : {children: string}) {
  return (
    <h1 className={style.h1}>
      {children}
    </h1>
  )
}