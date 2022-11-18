import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import styles from './home.module.scss';

type HomeProps = {
  product: {
    priceId: string,
    amount: number
  }

}

export default function Home({ product }: HomeProps) {

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
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

// variável que recebe uma função que realiza tarefas no lado do servidor (deve ter exatamente este nome!)
export const getServerSideProps: GetServerSideProps = async () => {

  // Id que representa o preço do produto
  const price = await stripe.prices.retrieve('price_1M5INcK5XDk9bXHHDVt9BPO8', {

    // Utilizado para retornar todas as informações sobre o produto, segundo a documentação ele pode ser expandido
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    // Fiz isso porque o price.unit_amount retorna ou number ou null, dai preciso tratar o null por causa do TypeScript
    // Além disso precisa-se formatar o valor para aparecer em cifrão
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount ? price.unit_amount / 100 : 0),
  };

  return {
    props: {
      product,
    }
  }
}
