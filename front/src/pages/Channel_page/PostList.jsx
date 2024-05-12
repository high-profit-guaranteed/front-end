import React from 'react';
import Post from './Post';

const tableHeaderStyle = {
  padding: '8px 16px',
  fontWeight: 'bold',
  textAlign: 'left',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

function PostList({ board }) {
  const posts = [
    { id: 1, author: 'user1', date: '2024-05-01', title: '첫 번째 글', views: 10, comments: 5 },
    { id: 2, author: 'user2', date: '2024-05-02', title: '두 번째 글', views: 20, comments: 3 },
    { id: 3, author: 'user3', date: '2024-05-03', title: '세 번째 글', views: 15, comments: 8 },
    { id: 4, author: 'user4', date: '2024-05-04', title: '네 번째 글', views: 25, comments: 6 },
    { id: 5, author: 'user5', date: '2024-05-05', title: '다섯 번째 글', views: 18, comments: 7 },
    { id: 6, author: 'user6', date: '2024-05-06', title: '여섯 번째 글', views: 12, comments: 4 },
    { id: 7, author: 'user7', date: '2024-05-07', title: '일곱 번째 글', views: 22, comments: 9 },
    { id: 8, author: 'user8', date: '2024-05-08', title: '여덟 번째 글', views: 30, comments: 11 },
    { id: 9, author: 'user9', date: '2024-05-09', title: '아홉 번째 글', views: 14, comments: 6 },
    { id: 10, author: 'user10', date: '2024-05-10', title: '열 번째 글', views: 28, comments: 13 },
  ];

  return (
    <div style={containerStyle}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ ...tableHeaderStyle, paddingRight: '80px' }}>글쓴이</th>
            <th style={{ ...tableHeaderStyle, paddingRight: '80px' }}>날짜</th>
            <th style={{ ...tableHeaderStyle, paddingRight: '80px' }}>제목</th>
            <th style={{ ...tableHeaderStyle, paddingRight: '80px' }}>조회수</th>
            <th style={tableHeaderStyle}>댓글수</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <React.Fragment key={post.id}>
              <Post post={post} />
              {index !== posts.length - 1 && <tr><td colSpan="5">
                <hr style={{ border: 'none', borderTop: '3px solid #fff' }} /></td></tr>}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
