import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>The Blessing Asia</title>
        <link rel="icon" href="/cyc-logo.png" type="image/png" sizes="32x32" />
      </Head>

      <body className="antialiased bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
