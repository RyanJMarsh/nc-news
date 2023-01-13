import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import SmallArticleCard from "./SmallArticleCard";

function TopicArticleDisplay() {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((articles) => {
      const articlesByTopic = articles.filter(
        (article) => article.topic === slug
      );
      setLoading(false);
      setArticles(articlesByTopic);
    });
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="ArticleList">
        {articles.map((article) => {
          return (
            <li className="SmallArticleCard" key={article.article_id}>
              <SmallArticleCard article={article} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TopicArticleDisplay;
