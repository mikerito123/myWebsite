import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="text-[12px] tracking-wider font-light">
        <Head />
        <body className="loading bg-black">
          <Main />
          <NextScript />
          {/* <h1>yo</h1> */}
        </body>
      </Html>
    )
  }
}

export default MyDocument
