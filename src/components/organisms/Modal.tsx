import React, { useState } from "react";
import BtnAdd from "../atoms/BtnAdd";
import BtnEdit from "../atoms/BtnEdit";
import Music from "../atoms/Music";
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
  time,
}) => {
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

            <Time h={h} setH={setH} m={m} setM={setM} s={s} setS={setS} />
          </div>
          <Music/>
          
        </div>
        <div className="flex flex-row-reverse gap-4">
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
          <BtnEdit/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
