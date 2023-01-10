import { useState, useEffect } from "react";
import { fetchArticles } from "../api.js";
import SmallArticleCard from "./SmallArticleCard.jsx";

function ArticleDisplay() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setLoading(false);
      setArticles(articles);
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
              <SmallArticleCard
                article={ article }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleDisplay;
