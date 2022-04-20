import React from "react";
import Colon from "../atoms/Colon";
import Hours from "../atoms/Hours";
import Seconds from "../atoms/Seconds";

interface Props {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}

const Time:React.FC<Props> = ({time, setTime}) => {
  return (
    <div className="grid grid-cols-11 py-4  ">
      <Hours time={time} setTime={setTime}/>
      <Colon />
      <Seconds name="Minutes" time={time} setTime={setTime}/>
      <Colon />
      <Seconds name="Seconds" time={time} setTime={setTime}/>
    </div>
  );
};

export default Time;
