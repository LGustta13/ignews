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
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
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

