import React, { useState } from 'react';
import '../styles/bookmark.css'

const BookmarkButton: React.FC = () => {
  const [isMarked, setIsMarked] = useState(false);

  const handleClick = () => {
    setIsMarked(!isMarked);
  };

  return (
    <button className={`bookmark ${isMarked ? 'marked' : ''}`} onClick={handleClick}>
      <div className="text-black ">Save</div>
      <div className="icon ">
        <svg viewBox="0 0 36 36">
          <path className="filled" d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z" />
          <path className="default" d="M26 6H10V18V30C10 30 17.9746 23.5 18 23.5C18.0254 23.5 26 30 26 30V18V6Z" />
          <path className="corner" d="M10 6C10 6 14.8758 6 18 6C21.1242 6 26 6 26 6C26 6 26 6 26 6H10C10 6 10 6 10 6Z" />
        </svg>
      </div>
    </button>
  );
};

export default BookmarkButton;
