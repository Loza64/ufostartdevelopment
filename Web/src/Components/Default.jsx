export default function Default() {
  return (
      <div className="default">
        <h1>Error 404</h1>
        <h2> page not found</h2>
        <h3>url <span>{window.location.pathname}</span> was not found</h3>
      </div>
  )
}