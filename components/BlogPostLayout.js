import Head from "next/head";
import MorePosts from "./MorePosts"

export default function BlogPostLayout({ children, meta }){
    return(
        <>
        <Head>
            <title>{`${meta.title} | Marco Pacifico`}</title>
            <meta property="og:title" content={meta.title} key="title" />
            <meta name="description" content={meta.description} />
        </Head>
        <section>
            <h1>{meta.title}</h1>
            <h3>{meta.description}</h3>
        </section>
        <section>{children}</section>
        <MorePosts currentPost={meta.slug}/>
        </>
    )
};