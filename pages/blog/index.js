import React from 'react'
import styles from '../../styles/blog.module.css'
import Link from 'next/link'


import { getAllPostsForHome } from "../../lib/api"
import { Nav } from 'react-bootstrap'

export default function Blog({ allPosts }) {

    console.log(allPosts)
    return (
        <div className={styles.container}>

            <main className={styles.main}>

                <div className={styles.grid}>
                    {
                        allPosts.length > 0 ? (
                            allPosts.map((post) => (
                                <div className={styles.card} key={post.sys.id}>
                                    <div className={styles.imageHolder}>
                                        <img src={post.coverImage.url} alt={post.title} />
                                    </div>
                                    <div className={styles.details}>
                                        <Link href={`blog/${post.sys.id}`} passHref>
                                            <Nav.Link>{post.title} &rarr;</Nav.Link>
                                        </Link>
                                        <p>{post.excerpt}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.card}>
                                <p>No posts added!</p>
                            </div>
                        )
                    }
                </div>
            </main>

            <footer className={styles.footer}>
                <p>Simple blog app</p>
            </footer>
        </div>
    )
}

export async function getStaticProps({ preview = false }) {
    let allPosts = (await getAllPostsForHome(preview)) ?? [];

    return {

        props: { preview, allPosts }
    }
}
