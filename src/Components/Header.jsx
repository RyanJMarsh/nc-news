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
    </div>
  );
}

export default Header;
