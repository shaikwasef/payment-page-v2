import { AppProps } from "next/app";
import "@/styles/style.css";
import { Layout } from "@/layouts";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
