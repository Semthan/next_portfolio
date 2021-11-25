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