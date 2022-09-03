import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

//components
import Layout from '../../components/Layout'

const FirstPost = () => {
    return (
        <Layout>
            <Head>
                <title>First-post</title>
            </Head>
            <h1>First post</h1>

            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    )
}

export default FirstPost
