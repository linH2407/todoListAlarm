import React, { useCallback, useState } from "react";
import BtnToggle from "../atoms/BtnToggle";

export interface TodoData {
  id:number;
  h: number;
  m: number;
  s: number;
  active: boolean;
}

export interface TodoProps extends TodoData {
  updateActive: (active: boolean) => void;
 todos:Array<TodoData>;
 setTodos: React.Dispatch<React.SetStateAction<TodoData[]>>;
}


const Todo: React.FC<TodoProps> = ({id, h, m, s, updateActive, todos, setTodos }) => {
  const handleToggle = useCallback(
    (event: any) => {
      updateActive(event.target.checked);
    },
    [updateActive]
  );

  return (
    
    <div className="mx-2 border-b-[1px]">
      <div className="pb-4 pt-3 px-7">
        <div className="flex justify-between ">
          <div>
            <p className="font-mon font-bold text-[32px]">
              {h}:{m}:{s}
            </p>
            <p className="text-[#6D6E71] text-[14px] italic ">Tiếng chó sủa</p>
          </div>
          <div>
            <div>
              <BtnToggle onChange={handleToggle} />
            </div>
            <div>
              <button type="button" className="mr-[14px] ">
                <i onClick={(id) => setTodos(todos.filter((todo) => todo.id !== id))} className="fa-solid fa-trash-can text-[#DBDBDB] hover:text-[#7992C4]"></i>
              </button>
              <button type="button">
                <i className="fa-solid fa-pen text-[#DBDBDB] hover:text-[#7992C4]"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
