import React, { useState } from "react";
import BtnAdd from "../atoms/BtnAdd";
import Time from "../molecules/Time";

interface Props {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showEmptyTodo: boolean;
  setShowEmptyTodo: React.Dispatch<React.SetStateAction<boolean>>;
  showTodo: boolean;
  setShowTodo: React.Dispatch<React.SetStateAction<boolean>>;
  h: number;
  setH: React.Dispatch<React.SetStateAction<number>>;
  m: number;
  setM: React.Dispatch<React.SetStateAction<number>>;
  s: number;
  setS: React.Dispatch<React.SetStateAction<number>>;
  todos: never[];
  setTodos: React.Dispatch<React.SetStateAction<never[]>>;
  time: String;
}

const Modal: React.FC<Props> = ({
  showModal,
  setShowModal,
  showEmptyTodo,
  setShowEmptyTodo,
  showTodo,
  setShowTodo,
  h,
  setH,
  m,
  setM,
  s,
  setS,
  todos,
  setTodos,
  time
}) => {
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

            <Time h={h} setH={setH} m={m} setM={setM} s={s} setS={setS} />
          </div>
          <div className="mb-8">
            <p className="text-[14px] text-[#8E8E8E]">Nhạc chuông</p>
            <div className="flex gap-6">
              <select
                className="form-select appearance-none cursor-pointer font-regular text-[14px] block w-full px-3 py-1.5 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none "
                aria-label="Default select example"
              >
                <option className="pt-3 font-regular text-[14px]">
                  Tiếng chó sủa
                </option>
                <option className="pt-3 font-regular text-[14px]">
                  Tiếng chó sủa
                </option>
                <option className="pt-3 font-regular text-[14px]">
                  Tiếng chó sủa
                </option>
              </select>
              <div className="flex gap-3">
                <i className="fa-solid  fa-play text-[#7992C4] pt-2 cursor-pointer"></i>
                <div className="w-[80px] pt-2 cursor-pointer">
                  <p className="text-[14px] italic text-[#7992C4] ">Nghe thử</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BtnAdd
          showModal={showModal}
          setShowModal={setShowModal}
          showEmptyTodo={showEmptyTodo}
          setShowEmptyTodo={setShowEmptyTodo}
          showTodo={showTodo}
          setShowTodo={setShowTodo}
          h={h}
          setH={setH}
          m={m}
          setM={setM}
          s={s}
          setS={setS}
          todos={todos}
          setTodos={setTodos}
          time={time}
        />
      </div>
    </div>
  );
};

export default Modal;
