import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:400,500,600,700,800,900|Plus+Jakarta+Sans:400,500,600,700,800,900&amp;subset=latin" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
            </Head>
            <body className="antialiased bg-body text-body font-body">
                <Main />
                <NextScript />
                
            </body>
        </Html>
    )
}
