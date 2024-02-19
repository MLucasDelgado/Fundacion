'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

export default function Home() {

  const [imagenActual, setImagenActual] = useState(0); // Índice de la imagen actual
  const [animate, setAnimate] = useState(false); // Estado para controlar la animación
  const imagenes = ['next.svg', 'vercel.svg']; // Array con las rutas de las imágenes

  useEffect(() => {
    // Establecer el estado para activar la animación después de un breve retraso
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Ajusta el tiempo según tus preferencias

    // Limpiar el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Función para cambiar la imagen actual cada 5 segundos
    const intervalId = setInterval(() => {
      setImagenActual((prev) => (prev + 1) % imagenes.length);
      setAnimate(true); // Activar la animación cada vez que se cambia la imagen
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // Ejecutar solo una vez al montar el componente

  return (
    <main className={styles.main}>
      <section className={`${styles.seccion} ${animate ? styles.iniciarAnimacion : ''}`} id="seccionAnimada">
        <Image
          src='next.svg'
          className={styles.imagen}
          width={300}
          height={300}
        />
        <article className={styles.articulo}>
          <h2 className={styles.titulo}>Fundación</h2>
          <h4 className={styles.titulo1}>Familia y Discapacidad</h4>
          <p className={styles.parrafo}>Nuestro objetivo social es el mejoramiento de la calidad de vida de las personas con discapacidad, así como el fomento de la inclusión y la igualdad de oportunidades para este colectivo. Para lograrlo, nos comprometemos a llevar a cabo una amplia variedad de iniciativas en obras de bien público y proyectos de carácter social, cultural, educativo, productivo y programas de salud.</p>
          <p className={styles.parrafo}>
            Además, buscamos sensibilizar a la comunidad sobre las necesidades y desafíos que enfrentan las personas con discapacidad, promoviendo la solidaridad y la colaboración en la construcción de un mundo más inclusivo y equitativo para todos.
          </p>
        </article>
      </section>

      {/* ---------------- SECCION DE OBJETIVOS ---------------- */}

      <section id='mision' className={styles.objetivos}>
        <article className={styles.informacion}>
          <div className={styles.imagenContainer}>
            <Image
              src='next.svg'
              className={styles.imagenes}
              width={50}
              height={50}
            />
          </div>
          <h3 className={styles.encabezado}>Misión</h3>
          <p>
            Acompañar a las personas con discapacidad y a sus familias para mejorar su calidad de vida y fomentar la inclusión social de manera integral es nuestro compromiso principal.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Creemos firmemente en la importancia de proporcionar un apoyo continuo y personalizado que abarque no solo aspectos físicos y materiales, sino también emocionales y sociales.
          </p>
        </article>

        <article className={styles.informacion}>
          <div className={styles.imagenContainer}>
            <Image
              src='next.svg'
              className={styles.imagenes}
              width={50}
              height={50}
            />
          </div>
          <h3 className={styles.encabezado}>Visión</h3>
          <p>
            Ser un referente en el ambito de la inclusion. Aspiramos a que la inclusión de las personas con discapacidad en la cultura, el deporte, la salud y la educación sea un hecho natural y cotidiano en nuestra sociedad.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Aspiramos a que las personas con discapacidad sean ciudadanos de pleno derecho.
          </p>
        </article>

        <article className={styles.informacion}>
          <div className={styles.imagenContainer}>
            <Image
              src='next.svg'
              className={styles.imagenes}
              width={50}
              height={50}
            />
          </div>
          <h3 className={styles.encabezado}>Valores</h3>
          <ul>
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
            <li style={{ marginTop: '0.5rem' }}>
              Caridad.
            </li>
          </ul>
        </article>
      </section>

      {/* ---------------- SECCION DE TALLERES ---------------- */}

      <section id='taller' className={styles.talleres}>
        <article className={styles.contenido}>
          <h3 className={styles.text}>Nuestros Talleres</h3>
          <p className={styles.info}>
            La creación de un espacio de contención, integración social, creativo y diverso es fundamental para nosotros. Buscamos no solo brindar apoyo práctico, sino también generar un ambiente en el que cada individuo se sienta valorado y parte de una comunidad inclusiva y solidaria. Este espacio será un punto de encuentro donde las personas con discapacidad puedan compartir sus experiencias, intereses y talentos, fomentando así la aceptación y el respeto mutuo.
          </p>
          <p className={styles.info}>
            Nuestro objetivo es seguir creciendo y expandiendo nuestras actividades y servicios para llegar a más personas y comunidades, creando un impacto positivo y duradero en la sociedad. Nos esforzamos por establecer alianzas estratégicas con otras organizaciones y entidades gubernamentales para ampliar nuestra capacidad de acción y ofrecer soluciones integrales y sostenibles a los desafíos que enfrentan las personas con discapacidad y sus familias. Juntos, podemos construir un mundo más inclusivo, equitativo y accesible para todos.
          </p>
        </article>
        <div className={styles.galeria}>
          <Image 
            src={imagenes[imagenActual]}
            width={50}
            height={50} 
            className={styles.muestra}/>
        </div>
      </section>
    </main>
  )
}
