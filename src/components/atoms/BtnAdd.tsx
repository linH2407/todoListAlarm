import React from "react";

interface Props {
  handleClick: () => void;
  children: any;
}

const BtnAdd: React.FC<Props> = ({ handleClick, children }) => {
  return (
    <div className="flex flex-row-reverse pb-4 pr-4">
      <button
        type="submit"
        onClick={handleClick}
        className="bg-[#7992C4] text-white text-[14px] px-3 py-[10px] rounded-[8px] cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
};

export default BtnAdd;
