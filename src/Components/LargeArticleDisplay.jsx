import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import CommentsCard from "./CommentsCard.jsx";
import { updateArticleVotes } from "../api";

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

  const voteClick = (e, voteInc) => {
    e.preventDefault()
    const copyArticle = {...article}
    voteInc ? copyArticle.votes++ : copyArticle.votes--
    setArticle(copyArticle)
    updateArticleVotes(voteInc, article_id)
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
       <h3>{article.title}</h3>
       <h4>Written by: {article.author} on {new Date(article.created_at).toDateString()}</h4>
       <p>Votes: {article.votes}</p>
       <button onClick={(e) => {voteClick(e, true)}}>+</button>
       <button onClick={(e) => {voteClick(e, false)}}>-</button>
       <p>{article.body}</p>
       <CommentsCard article_id={ article_id }></CommentsCard>
    </div>
    
  )
}

export default LargeArticleDisplay;
