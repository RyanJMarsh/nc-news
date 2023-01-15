import { useState, useEffect } from "react";
import { fetchArticles } from "../api.js";
import SmallArticleCard from "./SmallArticleCard.jsx";

function ArticleDisplay() {

  const [topic, setTopic] = useState()
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedBy, setSortedBy] = useState("created_at")
  const [orderedBy, setOrderedBy] = useState("desc")

  useEffect(() => {
    setLoading(true)
    const query = { topic }
    switch (sortedBy) {
        case "created_at": 
            query.sort_by = "created_at"
            break;
        case "comment_count": 
            query.sort_by = "comment_count"
            break;
        case "votes": 
            query.sort_by = "votes"
            break;
        case "author": 
            query.sort_by = "author"
            break;
        case "title": 
            query.sort_by = "title"
            break;
    }
    orderedBy === "desc" ? query.order = "desc" : query.order = "asc";
    fetchArticles(query)
        .then((data) => {
            setArticles(data)
            setLoading(false)
        })       
}, [sortedBy, orderedBy, topic])

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>

      <label>Topics: </label>
      <button onClick={() => {setTopic()}}>all topics</button>
      <button onClick={() => {setTopic("coding")}}>coding</button>
      <button onClick={() => {setTopic("football")}}>football</button>
      <button onClick={() => {setTopic("cooking")}}>cooking</button>
      <br></br>
      <label>Sorted By: </label>
      <button onClick={() => {setSortedBy("created_at")}}>created_at</button>
      <button onClick={() => {setSortedBy("comment_count")}}>comment_count</button>
      <button onClick={() => {setSortedBy("votes")}}>votes</button>
      <button onClick={() => {setSortedBy("author")}}>author</button>
      <button onClick={() => {setSortedBy("title")}}>title</button>
      <button className="OrderedButton" onClick={() => {setOrderedBy("asc")}}>ASC</button>
      <button onClick={() => {setOrderedBy("desc")}}>DESC</button>

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

export default ArticleDisplay;
