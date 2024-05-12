import React from 'react';

function Post({ post }) {
  return (
    <tr>
      <td>{post.author}</td>
      <td>{post.date}</td>
      <td>{post.title}</td>
      <td>{post.views}</td>
      <td>{post.comments}</td>
    </tr>
  );
}

export default Post;