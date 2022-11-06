import '../styles/global.css'
import '../styles/module.css'
import React from 'react'
import Head from 'next/head';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  return (
  <>
    <Head>
      <title>또타</title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1431674278951978"
        crossOrigin="anonymous"></script>
    </Head>
    <div className="artboard phone-3 phone-1 back">
      <Component  {...pageProps}></Component>
      </div>
    {/* <Component {...pageProps} /> */}
  </>
  )
}

export default MyApp