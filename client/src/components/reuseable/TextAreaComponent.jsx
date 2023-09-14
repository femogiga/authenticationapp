import React from 'react';

const TextAreaComponent = ({ textAreaText, placeholder }) => {
  const textareaStyle = {
    width: '100%',
  };
  return (
    <div className='flow-2'>
      <p>{textAreaText}</p>
      <textarea className='textArea' placeholder={placeholder}></textarea>
    </div>
  );
};

export default TextAreaComponent;
