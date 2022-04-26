import React from "react";
import BtnToggle from "../atoms/BtnToggle";

interface Props {
  time: String;
  h: number;
  setH: React.Dispatch<React.SetStateAction<number>>;
  m: number;
  setM: React.Dispatch<React.SetStateAction<number>>;
  s: number;
  setS: React.Dispatch<React.SetStateAction<number>>;
}
const Todo:React.FC<Props> = ({h, setH, m, setM, s, setS, time}) => {
  return (
    <div className="mx-2 border-b-[1px]">
      <div className="pb-4 pt-3 px-7">
        <div className="flex justify-between ">
          <div>
            <p className="font-mon font-bold text-[32px]">{h}:{m}:{s}</p>
            <p className="text-[#6D6E71] text-[14px] italic ">Tiếng chó sủa</p>
          </div>
          <div>
            <div>
                <BtnToggle/>
            </div>
            <div>
              <button type="button" className="mr-[14px]">
                <i className="fa-solid fa-trash-can text-[#DBDBDB] hover:text-[#7992C4]"></i>
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
