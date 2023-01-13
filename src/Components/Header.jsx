import { useState, useEffect } from "react";
import { fetchTopics } from "../api";
import { Link } from "react-router-dom";

function Header() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topics) => {
      setTopics(topics);
    });
  });

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
