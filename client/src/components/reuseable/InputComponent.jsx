import React from 'react'

const InputComponent = ({ labelText ,placeholder}) => {
    // labelText = 'Name'
    const inputStyle = {
        borderRadius:'10px'
    }
  return (
      <div className='flow-2'>
          <p>{labelText}</p>
          <input type='text' style={inputStyle} name={labelText} value='' placeholder={placeholder}  />
    </div>
  )
}

export default InputComponent
