import Link from 'next/link'
import style from './NavBar.module.css'
import Image from 'next/image'

function NavBar() {
  return (
    <div>
      <nav className={style.nav}>
        <div className={style.logo}>
          <Image
            src='/logo.png'
            width={70}
            height={70} />
          <Link className={style.enlaces} style={{textAlign: 'center'}} href='#hola'>
            Fundación <br></br><p>Familia y discapacidad</p>
          </Link>
        </div>
        <div className={style.links}>
        <Link className={style.enlaces} href='#inicio'>Nosotros</Link>
        <Link className={style.enlaces} href='#mision'>Objetivos</Link>
        <Link className={style.enlaces} href='#taller'>Talleres</Link>
        <Link className={style.enlaces} href=''>Donación</Link>
        <Link className={style.enlaces} href=''>Contacto</Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar