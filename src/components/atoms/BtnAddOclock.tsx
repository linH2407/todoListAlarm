import React from "react";
import add from "../atoms/image/add.svg";

interface Props {
  showModal: boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BtnAddOclock:React.FC<Props> = ({showModal, setShowModal}) => {
  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center cursor-pointer"
      >
        <img src={add} alt="add" className="w-[12px] mr-1" />
        <p
          className="text-[#7992C4]
"
        >
          Thêm báo thức
        </p>
      </button>
    </div>
  );
};

export default BtnAddOclock;
