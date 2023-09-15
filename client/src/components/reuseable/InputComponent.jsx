import React from 'react';

const InputComponent = ({
  labelText,
  placeholder,
  name,
  id,
  value,
  onChange,
}) => {
  // labelText = 'Name'
  const inputStyle = {
    borderRadius: '10px',
  };
  return (
    <div className='flow-2'>
      <p>{labelText}</p>
      <input
        type='text'
        style={inputStyle}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
