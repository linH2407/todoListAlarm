import React from "react";

const Minutes = () => {
    const minutes = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
      41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    ];
    return (
    <div className="col-span-3">
      <select
        className="form-select appearance-none cursor-pointer font-bold text-xl block w-full px-3 py-1.5 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700
                             focus:bg-white focus:border-black focus:outline-none"
        aria-label="Default select example"
      >
        <option className="font-bold text-xl">Minutes</option>
        {minutes.map((min) => (
          <option value={min} className="pt-3 font-bold">
            {min}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Minutes;
