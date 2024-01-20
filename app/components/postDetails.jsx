export default async function PostDetails({ postId }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        next: {
            revalidate: 120,
        }
    });
    const post = await response.json()
    return (
        <>
            <h2>{post.title}</h2>
        </>
    )
}
