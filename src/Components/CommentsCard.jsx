import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../api";
import { postNewComment } from "../api";

function CommentsCard({ article_id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCommentsByArticleId(article_id).then((comments) => {
      setLoading(false);
      setComments(comments);
    });
  });

  const handleNewComment = (e, username) => {
    e.preventDefault();
    const newCommentPromise = postNewComment(article_id, username, newComment);
    Promise.all([newCommentPromise]).then(() => {
      setNewComment("");
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleNewComment(e, "tickle122");
        }}
      >
        <label>
          New Comment:
          <input
            type="text"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          ></input>
        </label>
        <button type="submit">Comment</button>
      </form>

      <ul className="CommentList">
        {comments.map((comment) => {
          return (
            <li className="CommentCard" key={comment.comment_id}>
              <p>Comment by {comment.author} on {new Date(comment.created_at).toDateString()}</p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentsCard;
