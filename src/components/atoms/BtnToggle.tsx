import React, { ChangeEventHandler } from "react";

type BtnToggleProps = {
  onChange: (event: any) => void;
};

const BtnToggle: React.FC<BtnToggleProps> = ({ onChange }) => {
  return (
    <div className="z-0">
      <label htmlFor="toggle-switch">
        <input
          type="checkbox"
          id="toggle-switch"
          className="border-2 border-[#E7E7E7] w-[36px] h-[20px] rounded-[12px] cursor-pointer appearance-none transition duration-200 bg-white checked:bg-[#7992C4] relative"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default BtnToggle;
