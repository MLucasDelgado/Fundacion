import Link from 'next/link'
import style from './NavBar.module.css'
import Image from 'next/image'

function NavBar() {
  return (
    <div className={style.contenedor}>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Image
            src='/logo2.png'
            width={110}
            height={110} />
          <Link className={style.enlaces} style={{textAlign: 'center'}} href='#hola'>
            Fundación <br></br><p>Familia y discapacidad</p>
          </Link>
        </div>
        <div className={style.links}>
        <Link className={style.enlaces} href='#nosotros'>Nosotros</Link>
        <Link className={style.enlaces} href='#mision'>Objetivos</Link>
        <Link className={style.enlaces} href='#taller'>Talleres</Link>
        <Link className={style.enlaces} href='#donación'>Donación</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar