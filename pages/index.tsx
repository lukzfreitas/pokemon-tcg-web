import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>List of Pokemons</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div>
            <Link href={`/pokemons/Pikachu`}>
              <a>Pikachu</a>
            </Link>
          </div>
          <div>
            <Link href={`/pokemons/Charmander`}>
              <a>Charmander</a>
            </Link>
          </div>
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>powered by Lucas Freitas</p>
      </footer>
    </div>
  )
}

export default Home
