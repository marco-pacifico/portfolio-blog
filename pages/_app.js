import GlobalStyles from "../components/GlobalStyles"
import AppLayout from "../components/AppLayout"

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <GlobalStyles/>
      <Component {...pageProps} />
    </AppLayout>
  )
}
