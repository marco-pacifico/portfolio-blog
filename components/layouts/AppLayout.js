import Head from "next/head";
import styled from "styled-components";
import Header from "../nav/Header";
import Footer from "../sections/Footer";

export default function AppLayout({ children }) {
    return(
        <>
            <Head>
                <title>Marco Pacifico | Portfolio and Blog</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Main>{children}</Main>
            <Footer/>
        </>
    )
}

const Main = styled.main`
    /* margin: var(--site-gutter); */
`