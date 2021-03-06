import "ress";
import "@/styles/application.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
