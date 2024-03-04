import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.contenedorPrincipal}>
        {/* --------------------- SECCION DEL NAVBAR --------------------- */}
        <div className={styles.contenedor}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Image
                src='/logo2.png'
                width={70}
                height={70} 
                alt='logo'/>
              <Link className={styles.enlaces} style={{ textAlign: 'center' }} href='#hola'>
                <p>Familia y discapacidad</p>
              </Link>
            </div>
            <div className={styles.links}>
              <Link className={styles.enlaces} href='#nosotros'>Nosotros</Link>
              <Link className={styles.enlaces} href='#mision'>Objetivos</Link>
              <Link className={styles.enlaces} href='#taller'>Talleres</Link>
              <Link className={styles.enlaces} href='#donación'>Donación</Link>
            </div>
          </nav>
        </div>

        {/* --------------------- SECCION DE LA PORTADA --------------------- */}

        <section className={styles.contenedorPortada}>
          <div className={styles.gradientOverlay}></div>
          <section className={styles.contentPortada}>
            <h1 className={styles.tituloPortada}>FAMILIA Y DISCAPACIDAD</h1>
            <p className={styles.parrafoPortada}>Trabajar en la mejora de la calidad de vida de las personas con discapacidad es un compromiso que abarca múltiples aspectos de su bienestar y su integración en la sociedad.</p>
            <button className={styles.botonPortada}>Conócenos</button>
          </section>
          <Image
            className={styles.portadaImagen}
            src='/portada.jpg'
            width={2000}
            height={500}
            alt='portada-pagina'
          />
        </section>
      </section>

      {/* --------------------- SECCION DE NOSOTROS --------------------- */}

      <section id='nosotros'  className={styles.contenedorSomos}>
        <h2 className={styles.titulosSomos}>Nuestra <span style={{ fontWeight: 'normal' }}>organización</span> </h2>
        <p style={{marginBottom: '5rem'}}>Conoce acerca de nuestros valores.</p>
        <section className={styles.sectionNosotros}>
          <section className={styles.card}>
            <Image
              className={styles.imagenSomos}
              src='/logo2.png'
              width={500}
              height={500}
              alt='imagen-somos'
            />
            <article className={styles.cardBody}>
            <h4 className={styles.titulo1}>Familia y Discapacidad</h4>
              <p className={styles.cardInfo}>
              Nuestro objetivo social es el mejoramiento de la calidad de vida de las personas con discapacidad, así como el fomento de la inclusión y la igualdad de oportunidades para este colectivo.
              </p>
            </article>
          </section>

          <section className={styles.card}>
            <Image
              className={styles.imagenSomos}
              src='/logo2.png'
              width={500}
              height={500}
              alt='imagen-somos'
            />
            <article className={styles.cardBody}>
            <h4 className={styles.titulo1}>Familia y Discapacidad</h4>
              <p className={styles.cardInfo}>
              Para lograr nuesto objetivo, nos comprometemos a llevar a cabo una amplia variedad de iniciativas en obras de bien público y proyectos de carácter social, cultural, educativo, productivo y programas de salud.
              </p>
            </article>
          </section>

          <section className={styles.card}>
            <Image
              className={styles.imagenSomos}
              src='/logo2.png'
              width={500}
              height={500}
              alt='imagen-somos'
            />
            <article className={styles.cardBody}>
            <h4 className={styles.titulo1}>Familia y Discapacidad</h4>
              <p className={styles.cardInfo}>
              Buscamos sensibilizar a la comunidad sobre las necesidades y desafíos que enfrentan las personas con discapacidad, promoviendo la solidaridad y la colaboración en la construcción de un mundo más inclusivo y equitativo para todos.
              </p>
            </article>
          </section>
        </section>
      </section>

      {/* --------------------- IMAGENES DE NOSOTROS --------------------- */}

      <div className={styles.divContenedor}>
        <h1 className={styles.tit}>Se <span style={{ fontWeight: '700' }}>parte</span> del Cambio</h1>
        <p className={styles.parraf}>Una organización que busca la igualdad en la sociedad.</p>
      </div>

      <section className={styles.niños}>
        <div className={styles.flexContainer}>
          <div className={styles.centeredVertical}>
            <Image src='/inicio.jpeg' className={styles.imagenUno} width={2000} height={2000} alt='niños' />
          </div>
          <div className={styles.fullHeight}>
            <Image src='/inicio.jpeg' className={styles.imagenDos} width={2000} height={2000} alt='niños' />
          </div>
          <section className={styles.dosImagenes}>
            <Image src='/inicio.jpeg' className={styles.imagenTres} width={2000} height={2000} alt='niños' />
            <Image src='/inicio.jpeg' className={styles.imagenCuatro} width={2000} height={2000} alt='niños' />
          </section>
        </div>
      </section>



      {/* --------------------- SECCION DE OBJETIVOS --------------------- */}

      <section id='mision' className={styles.contenedorMaestro}>
        <h3 className={styles.textoPri}>Trayendo <span style={{ color: 'black', fontWeight: '500' }}>sonrisas</span> a quienes más lo necesitan.</h3>
        <p className={styles.parrafoPri}>A través de nuestros objetivos.</p>
        <section className={styles.objetivos}>
          <article className={styles.informacion}>
            <div className={styles.imagenContainer}>
              <Image
                src='/misio.jpg'
                className={styles.imagenes}
                width={1000}
                height={1000}
                alt='mision'
              />
            </div>
            <h3 className={styles.encabezado}>Misión</h3>
            <p style={{ padding: '0 1.5rem' }}>
              Acompañar a las personas con discapacidad y a sus familias para mejorar su calidad de vida y fomentar la inclusión social de manera integral es nuestro compromiso principal.
            </p>

          </article>

          <article className={styles.informacion}>
            <div className={styles.imagenContainer}>
              <Image
                src='/vision1.jpg'
                className={styles.imagenes}
                width={1000}
                height={1000}
                alt='vision'
              />
            </div>
            <h3 className={styles.encabezado}>Visión</h3>
            <p style={{ padding: '0 1.5rem' }}>
              Ser un referente en el ambito de la inclusion. Aspiramos a que la inclusión de las personas con discapacidad en la cultura, el deporte, la salud y la educación sea un hecho natural y cotidiano en nuestra sociedad.
            </p>

          </article>

          <article className={styles.informacion}>
            <div className={styles.imagenContainer}>
              <Image
                src='/valores.jpg'
                className={styles.imagenes}
                width={1000}
                height={1000}
                alt='valores'
              />
            </div>
            <h3 className={styles.encabezado}>Valores</h3>
            <ul style={{ padding: '0 1.5rem', listStyle: 'none' }}>
              <li>
                Mirada integral de la persona.
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                Aceptación de las diferencias.
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                Responsabilidad y compromiso.
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                Trabajo en equipo y respeto por el otro.
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                Solidaridad.
              </li>
            </ul>
          </article>
        </section>
      </section>


      {/* ---------------- SECCION DE TALLERES ---------------- */}

      <section id='taller' className={styles.talleres}>
        <article className={styles.contenido}>
          <h3 className={styles.text}>Nuestros Talleres</h3>
          <p className={styles.info}>
            La creación de un espacio de contención, integración social, creativo y diverso es fundamental para nosotros. Buscamos no solo brindar apoyo práctico, sino también generar un ambiente en el que cada individuo se sienta valorado y parte de una comunidad inclusiva y solidaria. Este espacio será un punto de encuentro donde las personas con discapacidad puedan compartir sus experiencias, intereses y talentos, fomentando así la aceptación y el respeto mutuo.
          </p>

        </article>
        <div className={styles.galeria}>
          <section className={styles.contenidoTaller}>
            <article className={styles.articulo1}>
              <Image
                src='/danza.png'
                className={styles.logo1}
                width={30}
                height={30}
                alt='danza-taller'
              />
              <h3 className={styles.tituloTaller}>Danza</h3>
              <p style={{ paddingBottom: '.8rem' }}>Unirse al taller de danza es una oportunidad única para explorar el mundo del movimiento y la expresión corporal de una manera inclusiva y enriquecedora.</p>
              <p>A través de la danza, se abre la puerta a un universo de posibilidades donde cada paso, cada gesto, se convierte en una forma de comunicación sin barreras.</p>
            </article>

            <article className={styles.articulo2}>
              <Image
                src='/karate.png'
                className={styles.logo1}
                width={30}
                height={30}
                alt='Karate-taller'
              />
              <h3 className={styles.tituloTaller}>Karate</h3>
              <p style={{ paddingBottom: '.8rem' }}>En este taller, cada participante tiene la oportunidad de explorar su potencial, superar desafíos y alcanzar metas que parecían inalcanzables.</p>
              <p> Además, el karate fomenta el compañerismo y el trabajo en equipo, creando un ambiente de apoyo mutuo donde cada individuo se fortalece a sí mismo y a los demás.</p>
            </article>
          </section>

          <section className={styles.contenidoTaller}>
            <article className={styles.articulo3}>
              <Image
                src='/cuadro.png'
                className={styles.logo1}
                width={35}
                height={35}
                alt='Arte-taller'
              />
              <h3 className={styles.tituloTaller}>Arte</h3>
              <p style={{ paddingBottom: '.8rem' }}>A través de la pintura, se despiertan los sentidos y se libera la imaginación, permitiendo a cada participante explorar su mundo interior y plasmarlo en lienzo.</p>
              <p>Cada pincelada es una oportunidad para comunicar emociones, pensamientos y experiencias de una manera única y poderosa. Además, la pintura es terapéutica, brindando un espacio de calma y reflexión en medio del ajetreo diario.</p>
            </article>

            <article className={styles.articulo4}>
              <Image
                src='/flechas.png'
                className={styles.logo1}
                width={30}
                height={30}
                alt='Reciclado-taller'
              />
              <h3 className={styles.tituloTaller}>Reciclado</h3>
              <p style={{ paddingBottom: '.8rem' }}>A través del reciclado, se transforman materiales aparentemente insignificantes en piezas únicas y funcionales, dando una nueva vida a objetos que de otro modo podrían haber sido descartados</p>
              <p>Además, el reciclado fomenta la creatividad y el pensamiento lateral, invitando a los participantes a pensar fuera de la caja y encontrar belleza en lo que otros podrían considerar desechos.</p>
            </article>
          </section>

        </div>
      </section>

      {/* ---------------- SECCION DE DONACIONES ---------------- */}

      <section id='donación' className={styles.containerPrincipal}>
        <h3 className={styles.textoPri}>Podes <span style={{ color: 'black', fontWeight: '500' }}>ayudar</span> donando</h3>
        <p className={styles.parrafoPri}>Por medio de nuestros servicios.</p>
        <section className={styles.contenedorArticulos}>
          <article className={styles.articulos}>
            <Image
              src='/donacion.png'
              className={styles.logo1}
              width={50}
              height={50}
              alt='Recolecta-donacion'
            />
            <h3>
              Recolecta
            </h3>
            <p style={{ textAlign: 'center', padding: '0 2rem' }}>
              Te comunicas con el equipo Eco San Expedito, y coordinamos retiro en los dias y horarios que te convenga. El material a retirar puede ser plastico, vidrio, carton y aluminio.
            </p>
          </article>

          <article className={styles.articulos}>
            <Image
              src='/casa.png'
              className={styles.logo1}
              width={50}
              height={50}
              alt='Eventos-donacion'
            />
            <h3>
              Eventos
            </h3>
            <p style={{ textAlign: 'center', padding: '0 2rem' }}>
              Si tenes un salon de eventos o realizaste una fiesta podes comunicarte con nosotros para que realicemos el retiro del material ya clasificado.
            </p>
          </article>

          <article className={styles.articulos}>
            <Image
              src='/coche.png'
              className={styles.logo1}
              width={50}
              height={50}
              alt='Condiciones-donacion'
            />
            <h3>Condiciones</h3>
            <p style={{ textAlign: 'center', padding: '0 2rem' }}>
              Para retirar el material, este tiene que estar separado de otros residuos que no sean reciclables.
              Podes dejarlo en bolsas en la puerta de tu domicilio el dia de la entrega.
            </p>
          </article>
        </section>
      </section>
    </main>
  )
}
