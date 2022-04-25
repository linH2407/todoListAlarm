import React, { useState } from "react";
import BtnAddOclock from "./components/atoms/BtnAddOclock";
import GetTime from "./components/atoms/GetTime";
import img1 from "./components/atoms/image/img1.png";
import Todo from "./components/molecules/Todo";
import Modal from "./components/organisms/Modal";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEmptyTodo, setShowEmptyTodo] = useState(true);
  const [showTodo, setShowTodo] = useState(false);

  const [todos, setTodos] = useState([]);

  const [h, setH] = useState(0);
  const [m, setM] = useState(0);
  const [s, setS] = useState(0);

  const time = h + ":" + m + ":" + s;
  return (
    <div>
      <div>
        <h1 className=" font-black text-[31px] mt-11">linH.</h1>
      </div>
      <div className="text-center">
        <p className="font-black text-[36px] pt-8 ">
          <GetTime />
        </p>
        <p className="text-[20px] font-semibold">Ha Noi, Viet Nam</p>
      </div>
      <div className="border border-[#EEE4E4] max-w-5xl mx-auto rounded-md mt-7 ">
        <div className="flex justify-between border-b-[2px] pb-3 pt-5 px-6 mx-3">
          <p>Danh sách báo thức</p>
          <div>
            <BtnAddOclock showModal={showModal} setShowModal={setShowModal} />

            {showModal && (
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                showEmptyTodo={showEmptyTodo}
                setShowEmptyTodo={setShowEmptyTodo}
                showTodo={showTodo}
                setShowTodo={setShowTodo}
                h={h}
                setH={setH}
                m={m}
                setM={setM}
                s={s}
                setS={setS}
                time={time}
                todos={todos}
                setTodos={setTodos}
              />
            )}
          </div>
        </div>
        {showEmptyTodo && (
          <div>
            <div className="mt-16">
              <img src={img1} alt="img1" className="mx-auto" />
            </div>
            <div className="text-[16px] text-[#DBDBDB] text-center mt-11 mb-20 ">
              <p>Bạn chưa có báo thức nào trong danh sách</p>
              <p>Bấm thêm báo thức</p>
            </div>
          </div>
        )}

        {/* {todos.map((todo, index) => (
          ))} */}
        {showTodo && (
          <Todo
            h={h}
            setH={setH}
            m={m}
            setM={setM}
            s={s}
            setS={setS}
            // todos={todos}
            // setTodos={setTodos}
            time={time}
          />
        )}
      </div>
    </div>
  );
};

export default App;
