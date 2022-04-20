import React, { useState } from "react";
import BtnAdd from "../atoms/BtnAdd";
import Time from "../molecules/Time";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ showModal, setShowModal }) => {
  const [time, setTime] = useState<number>(0);
  console.log('====================================');
  console.log(time);
  console.log('====================================');
  return (
    <div className=" bg-black absolute inset-0  bg-opacity-40  ">
      <div className="bg-white max-w-4xl mx-auto mt-[200px] rounded-b-md drop-shadow-md">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-[20px] font-semibold pt-5">Thêm báo thức mới</h1>
          <i
            onClick={() => setShowModal(false)}
            className="fa-solid fa-xmark bg-[#E3E3E3] px-3 py-2 rounded-full cursor-pointer"
          ></i>
        </div>
        <div className="px-8 pt-11">
          <div>
            <p className="text-[14px] text-[#8E8E8E]">Thời gian</p>

            <Time time={time} setTime={setTime}/>
          </div>
          <div>
            <p className="text-[14px] text-[#8E8E8E]">Nhạc chuông</p>
            <div></div>
          </div>
        </div>
        <BtnAdd showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};

export default Modal;
