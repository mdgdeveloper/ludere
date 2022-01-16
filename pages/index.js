import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ludere Project 1.0</title>
        <meta name="description" content="Ludere Game Tracking System V1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.mainContainer}>
        <Main />
      </main>

      
    </div>
  )
}
