import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../api";

function CommentsCard({article_id}) {
    
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchCommentsByArticleId(article_id)
        .then((comments) => {
            setComments(comments)
        })
    })

    return (
        <div>
          <ul className="CommentList">
            {comments.map((comment) => {
    
              return (
                <li className="CommentCard" key={comment.comment_id}>
                  <p>{comment.author}</p>
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