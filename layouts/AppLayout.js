import Head from "next/head";
import styled from "styled-components";

export default function AppLayout({ children }) {
    return(
        <>
            <Head>
                <title>Marco Pacifico | Portfolio and Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>

            </header>

            <Main>
                {children}
            </Main>

            <footer>

            </footer>
        </>
    )
}

const Main = styled.main`
  /* height: 100%; */
  /* display: flex;
  flex-direction: column;
  gap: var(--spacing3);
  align-items: center;
  justify-content: center; */
`