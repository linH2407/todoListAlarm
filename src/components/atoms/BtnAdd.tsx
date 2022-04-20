import React from "react";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const BtnAdd:React.FC<Props> = ({showModal, setShowModal}) => {

  return (
    <div className="flex flex-row-reverse pb-4 pr-4">
      <button
        type="submit"
        onClick={() => setShowModal(false)}
        className="bg-[#7992C4] text-white text-[14px] px-3 py-[10px] rounded-[8px] cursor-pointer"
      >
        Thêm
      </button>
    </div>
  );
};

export default BtnAdd;
