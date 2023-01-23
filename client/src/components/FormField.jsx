import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe}) => {
  return (
    <div>
     <div className="flex items-center gap-2 mb-2">
        <label
         htmlFor={name}
         className="block text-sm font-medium text-gray-900"
         >
            {labelName}
         </label>
         {isSurpriseMe &&(
            <button
                type="button"
                onClick={handleSurpriseMe}
                className="font-semibold text-xs bg-[#ECECF1] text-black px-2 py-1 rounded-[5px]">
                Surprise me
            </button>
         )}
     </div>
     <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-3 w-full text-sm outline-none focus:border-[#4649ff] focus:ring-[#4649ff] block'
     />
    </div>
  )
}

export default FormField