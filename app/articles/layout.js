export const metadata = {
    title: "Article Page"
}
export default function ({ children }) {
  return (
    <div>
      <div style={{ width: "100%", height: "100vh", background: "green"}}>
        {children}
      </div>
    </div>
  )
}
