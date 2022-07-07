import Head from "next/head";
import { Input } from "../../components/input/Input";
import { Panel } from "../../components/panel/Panel";
import styles from '../../styles/Home.module.css'

const Login: any = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>

            <main className={styles.main}>
                <Panel height="400px" width="400px"></Panel>
            </main>
        </div>
    );
}

export default Login;