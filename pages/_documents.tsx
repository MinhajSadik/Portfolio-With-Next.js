import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-gradient-to-r from-green to-blue-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
