import Head from "next/head";
import Input from "../../components/input/Input";
import { Panel } from "../../components/panel/Panel";
import styles from '../../styles/Home.module.css'
import { Button } from "../button/Button";

const Login: any = () => {
    return (
        <Panel height="400px" width="400px">
            <Input placeholder="username"></Input>
            <Input placeholder="password" type="password"></Input>
            <Button label="Login" primary={true}></Button>
        </Panel>
    );
}

export default Login;