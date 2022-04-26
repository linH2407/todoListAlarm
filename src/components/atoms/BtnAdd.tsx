import React from "react";

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
  time:String
}

const BtnAdd: React.FC<Props> = ({
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
  setTodos,time
}) => {
  const handleClick = () => {
    setShowModal(false);
    setShowEmptyTodo(false);
    setShowTodo(true);
    setH(h);
    setM(m);
    setS(s);
   
  };
 
  return (
    <div className="flex flex-row-reverse pb-4 pr-4">
      <button
        type="submit"
        onClick={handleClick}
        className="bg-[#7992C4] text-white text-[14px] px-3 py-[10px] rounded-[8px] cursor-pointer"
      >
        Thêm
      </button>
    </div>
  );
};

export default BtnAdd;
