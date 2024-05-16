import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Topbar from '../../components/Topbar';
import { useLocation, useNavigate } from 'react-router-dom';

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
      },
      input: {
        width: '98%',
        marginBottom: '20px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    },
      contentstyle: {
        width: '98%',
        height: '200px',
        marginBottom: '20px',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        resize: 'none',
    },
    buttonstyle: {
        textAlign: 'right',
        marginRight: '15px',
    }
}

const NewPost = ({ boards, setBoards }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { boardTitle } = location.state;
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    if (title && content) {
      const authors = ['귀여운 오리', '행복한 오리', '억울한 오리', '통쾌한 오리', '단호한 오리', '쾌활한 오리', '우아한 오리', '용감한 오리', '겸손한 오리', '차분한 오리'];
      const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
      
      const newPost = {
        title,
        content,
        author: randomAuthor,
        date: new Date().toLocaleDateString(),
        comments: ''
      };
      const newBoards = boards.map((board) => {
        if (board.title === boardTitle) {
          return { ...board, posts: [...board.posts, newPost] };
        }
        return board;
      });
      setBoards(newBoards);
      navigate('/channel');
    } else {
      alert('제목과 내용을 입력하세요.');
    }
  };

  const handleDeletePost = () => {
    navigate(-1);
  };

  return (
    <div>
        <Navbar />
        <Topbar />
        <div style={styles.container}>
            <div>
                <h2>{boardTitle} Board</h2>
                <input style={styles.input}
                    type="text" 
                    placeholder="제목을 입력하세요" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea style={styles.contentstyle}
                    placeholder="내용을 입력하세요" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                />
                <div style={styles.buttonstyle}>
                    <button style={{marginRight: '10px'}}onClick={handleAddPost}>게시글 등록</button>
                    <button onClick={handleDeletePost}>취소</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default NewPost;