import React from 'react'
import './input.scss'

const Input = ({label, valueData, placeholder,onChangeData,...rest }) => {
  return (
    <div className='input-wrapper'>
        <p className='label'>{label}</p>
        <input placeholder={placeholder} className='input' {...rest} onChange={onChangeData} value={valueData}/>
    </div>
  )
}

export default Input