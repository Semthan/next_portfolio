import { getPostAndMorePosts } from "../../lib/api";

export default function Post() {
    return (
        <div>

        </div>
    )
}

// Fetch for a single post
export async function getStaticProps({ params: { postId } }) {
    let { post, relatedPosts } = await getPostAndMorePosts(false, postId);
    return {
        props: {
            post,
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