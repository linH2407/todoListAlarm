import React from "react";

const Music = () => {
  return (
    <div className="mb-8">
      <p className="text-[14px] text-[#8E8E8E] pb-4 pt-6">Nhạc chuông</p>
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
  );
};

export default Music;
