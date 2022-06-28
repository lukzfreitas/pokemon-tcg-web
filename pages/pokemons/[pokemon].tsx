import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head"
import styles from '../../styles/Home.module.css'
import { getAllPokemons, getPokemon } from "../lib/pokemons";

const Pokemon: any = ({ pokemon }: { pokemon: { name: string, type: string } }) => {
    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>
            </Head>

            <main className={styles.main}>
                <h1>{pokemon.name}</h1>
                <h2>{pokemon.type}</h2>
            </main>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getAllPokemons();
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = ({ params }: any) => {
    const pokemon = getPokemon(params.pokemon);
    return {
        props: {
            pokemon,
        }
    }
}

export default Pokemon;
