import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {

  return (
    <>
      {/* O title foi colcado aqui porque futuramente queremos atualizá-lo oara cada página */}
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, Welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications <br />
            <span>for $9.98 month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

// variável que recebe uma função que realiza tarefas no lado do servidor (deve ter exatamente este nome!)
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      nome: 'Gustavo'
    }
  }
}
