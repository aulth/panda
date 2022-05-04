import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="google-site-verification" content="2Ii8X_9GYq3lZtKo33o6boJYW9GMfW3hWW1IhUKLKHE" />
    </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
