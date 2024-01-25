import Head from "next/head";
import styled from "styled-components";
import Header from "../nav/Header";
import Footer from "../sections/Footer";
import localFont from "@next/font/local";
const UntitledSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../../fonts/untitled-sans-web-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/untitled-sans-web-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/untitled-sans-web-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/untitled-sans-web-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Marco Pacifico | Portfolio and Blog</title>
        <meta name="description" content="Design Portfolio and Blog" />
        <meta name="og:description" content="Design Portfolio and Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Wrapper className={UntitledSans.variable}>
        <Header/>
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: var(--width-site-max);
  margin: auto;
`;
const Main = styled.main`
  /* margin: var(--site-gutter); */
`;
