import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

// signIn - Função do next-auth que faz a autenticação do usuário
// useSession - Hook do react que verifica se o usuário tem uma sessão ativa
import { signIn, useSession } from 'next-auth/react';

import styles from "./styles.module.scss";

export function SignInButton() {

    const { data: session, status } = useSession();

    function handleSignInButton() {
        signIn('github');
    }

    return session ? (
        <button
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#84d363" />
            Gustavo
            <FiX color="#737388" className={styles.closeIcon} />
        </button>
    ) : (
        <button
            type="button"
            className={styles.signInButton}
            onClick={handleSignInButton}
        >
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    )
}
