import React from 'react'

import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

const Post = ({ postData }) => {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
        </Layout>
    )
}

export default Post

//Fetching posts ids
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths, //array of ids
        fallback: false,
    }
}

//Pre-render all data with posts ids
export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData,
        },
    }
}
