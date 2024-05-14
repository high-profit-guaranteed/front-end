import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Write({ onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    // 초기화
    setTitle('');
    setContent('');
    // 작성 완료 후 이전 페이지로 이동
    navigate(-1);
  };

  const handleCancel = () => {
    onCancel();
    // 취소 시 이전 페이지로 이동
    navigate(-1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        name="content"
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">확인</button>
      <button type="button" onClick={handleCancel}>취소</button>
    </form>
  );
}

export default Write;
