import React, { useState } from "react";
import BtnAddOclock from "./components/atoms/BtnAddOclock";
import img1 from "./components/atoms/img1.png";
import Modal from "./components/organisms/Modal";

const App: React.FC = () => {
  var time = new Date();
  var getTime =
    time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <h1 className=" font-black text-[31px] mt-11">linH.</h1>
      </div>
      <div className="text-center">
        <p className="font-black text-[36px] pt-8 ">{getTime}</p>
        <p className="text-[20px] font-semibold">Ha Noi, Viet Nam</p>
      </div>
      <div className="border border-[#EEE4E4] max-w-5xl mx-auto rounded-md mt-7">
        <div className="flex justify-between border-b-[1px] pb-3 pt-5 px-6 mx-3">
          <p>Danh sách báo thức</p>
          <div>
            <BtnAddOclock showModal={showModal} setShowModal={setShowModal} />

            {showModal && (
              <Modal showModal={showModal} setShowModal={setShowModal} />
            )}
          </div>
        </div>
        <div className="mt-16">
          <img src={img1} alt="img1" className="mx-auto" />
        </div>
        <div className="text-[16px] text-[#DBDBDB] text-center mt-11 mb-20 ">
          <p>Bạn chưa có báo thức nào trong danh sách</p>
          <p>Bấm thêm báo thức</p>
        </div>
      </div>
    </div>
  );
};

export default App;
