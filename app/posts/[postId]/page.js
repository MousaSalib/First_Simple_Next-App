// export default async function PostDetailsPage({ params }) {
//     const postId = params.postId;
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
//         next: {
//             revalidate: 120,
//         }
//     });
//     const post = await response.json()
//     return (
//         <>
//             <h1>Post Details</h1>
//             <h2>{post.title}</h2>
//         </>
//     )
// }
import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";
export default async function PostDetailsPage({ params }) {
    const postId = params.postId;
    const loadingJSX = (
        <div>
            <h1>Loading.....</h1>
        </div>
    )
    return (
        <>
            <h1>Post Details</h1>
            <Suspense fallback={loadingJSX}>
                <PostDetails postId={postId} />
            </Suspense>    
        </>
    )
}