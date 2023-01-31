import React from 'react'
import './index.scss'

interface InputProps {
   label?: string;
   name: string;
   className?: string;
   placeholder?: string;
   type: string
}
function InputField(props: InputProps) {
   const { label, name, className, placeholder, type } = props
   return (
      <div className='input-group'>
         {
            label && <label className='input-label' htmlFor={name}>{label}</label>
         }
         <input
            name={name}
            className={`input-field ${className}`}
            placeholder={placeholder}
            type={type}
         />
      </div>
   )
}

export default InputField