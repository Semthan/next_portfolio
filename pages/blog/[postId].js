import Link from "next/link";
import styles from "../../styles/blog.module.css";
import { getPostAndMorePosts, getAllPostsForHome } from "../../lib/api";
import { useRouter } from "next/router";

export default function Post({ post, relatedPosts }) {

  console.log(post)
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {
          router.isFallBack ? (
            <div styles={styles.title}>
              Loading
            </div>
          ) : (
            <>
              <div className={styles.content}>

                <div styles={styles.title}>
                  {post.title}
                </div>

                <p className={styles.meta}>
                  {new Date(post.date).toDateString()}
                </p>

                <div className={styles.coverImage}>
                  <img src={post.coverImage.url} alt={post.title} />
                </div>

              </div>

              <div className={styles.grid}>
                {
                  relatedPosts.length > 0 ? (
                    <>
                      <div className={styles.title}>
                        Related posts
                      </div>
                      {
                        relatedPosts.map((post) => (
                          <div className={styles.card} key={post.sys.id}>
                            <div className={styles.imageHolder}>
                              <img src={post.coverImage.url} alt={post.title} />
                            </div>
                            <div className={styles.details}>
                              <Link href={`posts/${post.sys.id}`}>
                                <a>
                                  {post.title} &rarr;
                                </a>
                              </Link>
                              <p>{post.excerpt}</p>
                            </div>
                          </div>
                        ))
                      }
                    </>
                  ) : null
                }
              </div>
            </>
          )
        }
      </main>

      <footer className={styles.footer}>
        <p>Simple blog app</p>
      </footer>
    </div>
  )
}

// Fetch for a single post
export async function getStaticProps({ params: { postId } }) {
  let { post, relatedPosts } = await getPostAndMorePosts(false, postId);

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
      relatedPosts
    }
  }
}


// Fetch the other posts done at build time
//create dynamic pages
export async function getStaticPaths() {

  const posts = await getAllPostsForHome(false);

  let paths = posts.map((post) => ({
    params: {
      postId: post.sys.id
    }
  })
  );

  return {
    paths,
    fallback: true
  }
}