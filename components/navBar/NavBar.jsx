import Link from 'next/link'
import style from './NavBar.module.css'

function NavBar() {
  return (
    <div>
        <nav className={style.nav}>
            <Link className={style.enlaces} href='#hola'>Inicio</Link>
            <Link className={style.enlaces} href='#mision'>Objetivos</Link>
            <Link className={style.enlaces} href='#taller'>Qué hacemos</Link>
            <Link className={style.enlaces} href=''>Donacion</Link>
            <Link className={style.enlaces} href=''>Contacto</Link>
        </nav>
    </div>
  )
}

export default NavBar