import React from 'react';
import { Link } from 'react-router-dom';
import DeletePost from './DeletePost';

const styles = {
  tableStyle: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  tableHeader: {
    backgroundColor: '#f2f2f2',
    fontWeight: 'bold',
  },
  tableCellNumber: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    width: '5%',
  },
  tableCellTitle: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    width: '40%',
  },
  tableCellAuthor: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    width: '15%',
  },
  tableCellDate: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    width: '15%',
  },
  tableCellComments: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    width: '10%',
  },
  tableCellButton: {
    border: 'none',
    padding: '8px',
    textAlign: 'center',
    backgroundColor: '#fff',
    width: '10%',
  }
};

const Board = ({ boardTitle, boards, deletePost }) => {
  const board = boards.find((board) => board.title === boardTitle) || { title: boardTitle, posts: [] };

  return (
    <div>
      <br />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h2>{board.title} BOARD</h2>
      </div>
      <table style={styles.tableStyle}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCellNumber}>Number</th>
            <th style={styles.tableCellTitle}>Title</th>
            <th style={styles.tableCellAuthor}>Name</th>
            <th style={styles.tableCellDate}>Date</th>
            <th style={styles.tableCellComments}>Comments</th>
            <th style={styles.tableCellButton}></th>
          </tr>
        </thead>
        <tbody>
          {board.posts.map((post, index) => (
            <tr key={index}>
              <td style={styles.tableCellNumber}>{index + 1}</td>
              <td style={styles.tableCellTitle}>
                <Link to={`/post/${boardTitle}/${index}`}>{post.title}</Link>
              </td>
              <td style={styles.tableCellAuthor}>{post.author}</td>
              <td style={styles.tableCellDate}>{post.date}</td>
              <td style={styles.tableCellComments}>{post.comments.length}</td>
              <td style={styles.tableCellButton}>
                <DeletePost 
                  boardTitle={boardTitle}
                  postIndex={index}
                  deletePost={deletePost}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;