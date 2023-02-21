import NewsProp from "./NewsProp.jsx";

function News({articles}) {

  return (
    <>
      {articles && articles.map((article) => {
        return <NewsProp article={article} />
      })}
    </>
  )
}

export default News;