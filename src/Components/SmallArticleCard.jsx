import { Link } from "react-router-dom";

function SmallArticleCard(article) {
  return (
    <Link to={`/articles/${article.article.article_id}`}>
    <div>
      <h4>{article.article.title}</h4>
      <p>Written by: {article.article.author}</p>
      <p>Topic: {article.article.topic}</p>
      <p>Votes: {article.article.votes}</p>
    </div>
    </Link>
    
  );
}

export default SmallArticleCard;
