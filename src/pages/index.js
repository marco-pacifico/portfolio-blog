import Head from 'next/head'
import styled from 'styled-components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marco Pacifico | Portfolio and Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <h1>Hello, I'm Marco Pacifico</h1>
        <p>Welcome to my design portfolio and blog</p>
      </Main>
    </>
  )
}

const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
`