import { useEffect } from "react";
import { useState } from "react";
function Table1() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(data => setComments(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Post ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {comments.map(comment => (
          <tr key={comment.id}>
            <td>{comment.id}</td>
            <td>{comment.postId}</td>
            <td>{comment.name}</td>
            <td>{comment.email}</td>
            <td>{comment.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table1;