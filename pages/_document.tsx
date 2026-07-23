import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Compare mortgage rates from 50+ lenders across Canada. Free tools, calculators and first-time buyer programs." />
        <meta name="theme-color" content="#0d2240" />
        <meta property="og:title" content="Canada Mortgage Rates" />
        <meta property="og:description" content="Canada's most complete mortgage platform. Compare rates, calculate payments, find first-time buyer programs." />
        <meta property="og:type" content="website" /><meta property="og:site_name" content="Canada Mortgage Rates" />
        <meta property="og:site_name" content="Canada Mortgage Rates" />
        <meta property="og:image" content="https://www.canadamortgagerates.net/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.canadamortgagerates.net/og-image.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D00RKKCRZW"/>
        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D00RKKCRZW', { page_path: window.location.pathname });
        `}}/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
