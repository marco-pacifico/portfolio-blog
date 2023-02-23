import GlobalStyles from "../styles/6-GlobalStyles"
import AppLayout from "../layouts/AppLayout"

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <GlobalStyles/>
      <Component {...pageProps} />
    </AppLayout>
  )
}
