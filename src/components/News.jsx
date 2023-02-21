import NewsProp from "./NewsProp.jsx";

function News({articles}) {

  console.log(articles);

  return (
    <>
      {articles && articles.map((article) => {
        return <NewsProp article={article} />
      })}
    </>
  )
}

export default News;