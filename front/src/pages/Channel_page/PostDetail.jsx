import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '210px',
    marginRight: '20%',
    marginTop: '21px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#F3F3F3',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    boxSizing: 'border-box',
  },
  info: {
    textAlign: 'right',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: '10px',
    borderRadius: '5px',
    padding: '5px 15px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  line: {
    borderTop: '1px solid #8f8d8d',
    marginTop: '10px',
    marginBottom: '10px',
  },
  comment: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  commentItem: {
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commentForm: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '20px',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    height: '100px',
    fontSize: '16px',
    flex: '1',
    marginRight: '10px',
    resize: 'none',
  },
  submitButton: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    cursor: 'pointer',
    fontSize: '16px',
  },
  deleteButton: {
    padding: '5px 10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    cursor: 'pointer',
    fontSize: '14px',
    
  }
};

const PostDetail = ({ boards }) => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const postIndex = parseInt(postId, 10);
  const post = boards[0].posts[postIndex];
  const boardName = boards[0].title;

  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');
  const [authorIndex, setAuthorIndex] = useState(1);

  if (!post) {
    return <div>게시글이 없습니다.</div>;
  }

  const handleBackToBoard = () => {
    navigate(-1);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const comment = {
      id: new Date().getTime(),
      author: `오리${authorIndex}`,
      content: newComment,
    };
    setComments([...comments, comment]);
    setNewComment('');
    setAuthorIndex(authorIndex + 1);
  };

  const handleDeleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div>
      <Navbar />
      <Topbar />
      <div style={styles.container}>
        <div style={styles.title}>
          <h2>{boardName} Board</h2>
        </div>
        <div style={styles.content}>
          <h2>{post.title}</h2>
          <div style={styles.line}></div>
          <div style={styles.info}>
            <p>작성자: {post.author}</p>
            <p>작성일: {post.date}</p>
          </div>
          <br />
          <h2>{post.content}</h2>
        </div>
        <div style={styles.comment}>
          <p>Comments</p>
          {comments.map((comment) => (
            <div key={comment.id} style={styles.commentItem}>
              <pre><strong>{comment.author}</strong>   {comment.content}</pre>
              <button
                style={styles.deleteButton}
                onClick={() => handleDeleteComment(comment.id)}
              >
                삭제
              </button>
            </div>
          ))}
          <form style={styles.commentForm} onSubmit={handleCommentSubmit}>
            <textarea
              style={styles.input}
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment"
              required
            />
            <button style={styles.submitButton} type="submit">Submit</button>
          </form>
        </div>
        <div style={styles.buttonContainer}>
            <button style={styles.button} onClick={handleBackToBoard}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
