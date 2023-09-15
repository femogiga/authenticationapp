import React from 'react';

const TextAreaComponent = ({
  textAreaText,
  placeholder,
  name,
  value,
  id,
  onChange,
}) => {
  const textareaStyle = {
    width: '100%',
  };
  return (
    <div className='flow-2'>
      <p>{textAreaText}</p>
      <textarea
        className='textArea'
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}></textarea>
    </div>
  );
};

export default TextAreaComponent;
