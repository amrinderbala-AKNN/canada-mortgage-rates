import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Compare mortgage rates across all of Canada. Banks, credit unions, AI-powered tools, property tax, insurance and more." />
        <meta name="theme-color" content="#0d2240" />
        <meta property="og:title" content="Canada Mortgage Rates" />
        <meta property="og:description" content="Canada's most complete mortgage platform. Compare rates, calculate payments, find first-time buyer programs." />
        <meta property="og:type" content="website" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
