import React, { useState } from "react";
import Colon from "../atoms/Colon";
import Hours from "../atoms/Hours";
import Minutes from "../atoms/Minutes";
import Seconds from "../atoms/Seconds";

interface Props {
  h: number;
  setH: React.Dispatch<React.SetStateAction<number>>;
  m: number;
  setM: React.Dispatch<React.SetStateAction<number>>;
  s: number;
  setS: React.Dispatch<React.SetStateAction<number>>;
}
const Time: React.FC<Props> = ({ h, setH, m, setM, s, setS }) => {
  const [todo, setTodo] = useState([]);

  return (
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
  );
};

export default Time;
