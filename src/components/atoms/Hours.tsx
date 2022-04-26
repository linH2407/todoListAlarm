import React, { useState } from "react";

interface Props {
  h: number;
  setH: React.Dispatch<React.SetStateAction<number>>;
}

const hours = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];
const Hours: React.FC<Props> = ({h, setH}) => {
  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(event.target.value);
    setH(value);
  };
  return (
    <div className="col-span-3 ">
      <p className="font-bold text-xl">Hours</p>
      <select
        value={h}
        onChange={selectChange}
        className="form-select appearance-none cursor-pointer font-bold text-xl block w-full px-3 py-1.5 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none "
        aria-label="Default select example"
      >
        {hours.map((hour) => (
          <option value={hour} className="pt-3 font-bold">
            {hour}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Hours;
