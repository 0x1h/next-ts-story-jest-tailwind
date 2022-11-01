import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "./GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
