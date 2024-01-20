import Link from "next/link";

export default async function posts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 120,
    }
  });
  const posts = await response.json();

  const postJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`}>
        <div key={post.id} style={
          {
            padding: '10px', 
            borderRadius: "10px",
            backgroundColor: "yellow",
            margin: "5px auto",
          }
        }>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </Link>
    )
  })
  return (
    <>
    <div>
      {postJSX}
    </div>
    </>
  )
}
