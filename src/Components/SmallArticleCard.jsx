function SmallArticleCard(article) {
  return (
    <div>
      <h4>{article.article.title}</h4>
      <p>Written by: {article.article.author}</p>
      <p>Topic: {article.article.topic}</p>
      <p>Votes: {article.article.votes}</p>
    </div>
  );
}

export default SmallArticleCard;
