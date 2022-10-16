import { AppProps } from "next/app";
import Head from "next/head";
import { GlobalCSS } from "../styles/styles";
import { UniversalMantineProvider } from "components/mantine/UniversalMantineProvider";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Starter</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <UniversalMantineProvider>
        <Component {...pageProps} />
      </UniversalMantineProvider>
      <GlobalCSS />
    </>
  );
}
