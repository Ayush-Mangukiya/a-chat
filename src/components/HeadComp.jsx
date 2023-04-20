import Head from "next/head";

export default function HeadComp({ title }) {
    return (
        <Head>
            <title>{title || ""}ACHAT</title>
            <meta
                name="description"
                content="Kind of WhatsApp Clone using NextJS anf Firebase"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}
