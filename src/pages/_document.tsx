import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (

            // <!DOCTYPE html>
            // <html lang="en">
            // <head>
            //     <meta charset="UTF-8" />
            //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            //     <title>Document</title>
            // </head>
            // <body>

            // </body>
            // </html>

            <Html>
                <Head>
                    <title>ig.news</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>


        )
    }
}

