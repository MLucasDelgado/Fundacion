import Link from 'next/link'

function NavBar() {
  return (
    <div>
        <nav>
            <Link href='#hola'>Inicio</Link>
            <Link href=''>Nosotros</Link>
        </nav>
    </div>
  )
}

export default NavBar