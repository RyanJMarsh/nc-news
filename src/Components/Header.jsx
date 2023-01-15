import { useState, useEffect } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

function Header() {
  const [topics, setTopics] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setLoading(false);
      setTopics(topics);
    });
  });
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Link to="/">
        <h1>NC-NEWS</h1>
      </Link>

      <ul className="TopicsList">
        {topics.map((topic) => {
          return (
            <li className="TopicsListItem" key={topic.slug}>
              <Link to={`topics/${topic.slug}`}>{topic.slug}</Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Header;
