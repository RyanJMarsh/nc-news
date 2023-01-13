import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import CommentsCard from "./CommentsCard.jsx";

function LargeArticleDisplay() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id).then((article) => {
      setLoading(false);
      setArticle(article);
    });
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <h3>{article.title}</h3>
       <h4>Written by: {article.author} on {new Date(article.created_at).toDateString()}</h4>
       <p>Votes: {article.votes}</p>
       <p>{article.body}</p>
       <CommentsCard article_id={ article_id }></CommentsCard>
    </div>
    
  )
}

export default LargeArticleDisplay;
