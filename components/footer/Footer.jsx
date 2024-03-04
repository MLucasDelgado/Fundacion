import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <section className={styles.seccion}>
      <section className={styles.contenedor}>
        <Image
          src='/ubi.png'
          className={styles.logo1}
          width={30}
          height={30}
          alt='Ubicacion'
        />
        <h3>
          <a className={styles.link} href="https://www.google.com/maps/search/?api=1&query=Barrio+San+Expedito+calle+Batalla+de+Salta+y+Los+Lirios" target="_blank">Barrio San Expedito</a>
        </h3>
      </section>

      <section className={styles.contenedor}>
        <Image
          src='/telefono.png'
          className={styles.logo1}
          width={30}
          height={30}
          alt='Telefono'
        />
        <Link href="tel:3815152609" className={styles.link}>
          <h3 className={styles.titulo}>
            3815152609
          </h3>
        </Link>

      </section>

      <section className={styles.contenedor}>
        <Image
          src='/email.png'
          className={styles.logo1}
          width={30}
          height={30}
          alt='Mail'
        />
        <Link className={styles.link} href='mailto:fundacionfyd@gmail.com'>
          <h3 className={styles.titulo}>
            fundacionfyd@gmail.com
          </h3>
        </Link>
      </section>
    </section>
  )
}

export default Footer