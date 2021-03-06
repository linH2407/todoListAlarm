import React from 'react'

interface Props {
  handleEdit: () => void;
}

const BtnEdit:React.FC<Props> = ({handleEdit}) => {
  return (
    <div className=" pb-4 ">
    <button
      type="submit"
      className="bg-[#F3F3F3] text-[#7992C4] text-[14px] px-5 py-[10px] rounded-[8px] cursor-pointer"
    >
      Sửa
    </button>
  </div>
  )
}

export default BtnEdit