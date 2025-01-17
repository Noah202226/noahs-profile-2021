import "@/styles/globals.css";
import Layout from "./components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/nl.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
