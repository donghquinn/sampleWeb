import "../styles/global.css";
import "../styles/module.css";
import "../styles/subscribe.css";
import "../styles/player.css";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "../component/common/NavBar";
import Footer from "../component/common/Footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>또타</title>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1431674278951978"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <div>
        <NavBar></NavBar>
        <Component {...pageProps}></Component>
      </div>
      {/* <div>
        <Footer></Footer>
      </div> */}
      {/* <Component {...pageProps} /> */}
    </>
  );
}

export default MyApp;
