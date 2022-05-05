import React, { useState } from "react";
import BtnAdd from "../atoms/BtnAdd";
import BtnEdit from "../atoms/BtnEdit";
import Colon from "../atoms/Colon";
import Hours from "../atoms/Hours";
import Minutes from "../atoms/Minutes";
import Music from "../atoms/Music";
import Seconds from "../atoms/Seconds";

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowEmptyTodo: React.Dispatch<React.SetStateAction<boolean>>;
  createTime: (data: { h: number; m: number; s: number }) => void;
}

const Modal: React.FC<Props> = ({
  setShowModal,
  createTime,
  setShowEmptyTodo,
}) => {
  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  return (
    <div className=" bg-black absolute inset-0  bg-opacity-40  z-40">
      <div className="bg-white max-w-4xl mx-auto mt-[200px] rounded-b-md drop-shadow-md">
        <div className="flex justify-between items-center px-4">
          <h1 className="text-[20px] font-semibold pt-5">Thêm báo thức mới</h1>
          <i
            onClick={() => setShowModal(false)}
            className="fa-solid fa-xmark bg-[#E3E3E3] px-3 py-2 rounded-full cursor-pointer"
          ></i>
        </div>
        <div className="px-8 pt-10">
          <div>
            <div>
              <p className="text-[14px] text-[#8E8E8E] mb-[-8px]">Thời gian</p>

              <div className="grid grid-cols-11 py-4  ">
                <Hours h={h} setH={setH} />
                <Colon />
                <Minutes m={m} setM={setM} />
                <Colon />
                <Seconds s={s} setS={setS} />
              </div>
            </div>
          </div>
          <Music />
        </div>
        <div className="flex flex-row-reverse gap-4">
          <BtnAdd
            handleClick={() => {
              createTime({
                h,
                m,
                s,
              });
              setShowEmptyTodo(false);
            }}
          >
            Thêm
          </BtnAdd>
          <BtnEdit handleEdit={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
