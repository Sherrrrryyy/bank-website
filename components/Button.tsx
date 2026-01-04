import React from 'react'
import Image from 'next/image'


type ButtonProps = {
    type: 'button' | 'submit',
    title: string,
    icon?: string,
    variant: string,
    full?: boolean
}


const Button = ({type, title, icon, variant, full}: ButtonProps) => {
  return (
   <button className={`flex items-center gap-2 px-8 py-3 rounded-3xl font-medium ${variant === 'primary' ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-200 text-black hover:bg-purple-300'} ${full ? 'w-full' : ''}`} type={type}>
     {icon && <Image src={icon} alt={title} width={24} height={24} />}
<label className='cursor-pointer bold-16 whitespace-nowrap'>{title}</label>
   </button>
  )
}

export default Button
