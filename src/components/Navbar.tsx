import style from "../main/style/Main.module.scss"

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.content}>
        <div className={style.logo}>
          Logo
        </div>
        <div className={style.phone} onClick={() => window.scrollTo({top: 700, behavior: "smooth"})}>
          TECH STACK
        </div>
      </div>
    </div>
  )
}