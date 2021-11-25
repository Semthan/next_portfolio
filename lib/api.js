//Schema
const POST_GRAPHQL_FIELDS = `
    sys {
        id
    }  
    title
    coverImage {
        url
    }
    date
    excerpt
    content {
        json
    }`

//fetchGraphQL method for establishing contact with the Contentful API
async function fetchGraphQL(query, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${preview
                    ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                    : process.env.CONTENTFUL_ACCESS_TOKEN
                    }`,
            },
            body: JSON.stringify({ query }),
        }
    ).then((response) => response.json())
}

//method for extracting data (all posts)
function extractPostEntries(fetchResponse) {
    return fetchResponse?.data?.blogPostCollection?.items
}

//method for extracting data (single posts)
function extractPost(fetchResponse) {
    return fetchResponse?.data?.blogPost
}

//function to query the posts from the Contentful API
export async function getAllPostsForHome(preview) {
    const entries = await fetchGraphQL(
        `query {
        blogPostCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
        }`,
        preview
    )
    return extractPostEntries(entries)
}

//fetch a single post
export async function getPostAndMorePosts(preview, postId) {

    const entry = await fetchGraphQL(
        `query{
            blogPost(id:"${postId}",preview:${preview ? true : false}){                
                ${POST_GRAPHQL_FIELDS}                
            }
        }`
    );

    const entries = await fetchGraphQL(
        `query{
            blogPostCollection(preview:${preview ? true : false}, limit:2){
                items{
                    ${POST_GRAPHQL_FIELDS}
                }
            }
        }`
    );

    const post = extractPost(entry);

    const relatedPosts = extractPostEntries(entries).filter((_post) => _post.sys.id !== post.sys.id);
    return {
        post,
        relatedPosts
    };
}

