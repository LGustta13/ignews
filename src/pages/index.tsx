import Head from 'next/head';

export default function Home() {
  return (
    <>
      {/* O title foi colcado aqui porque futuramente queremos atualizá-lo oara cada página */}
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      <h1>
        Hello World
      </h1>
    </>

  )
}
