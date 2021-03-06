import React, { useCallback, useState } from "react";
import BtnAddOclock from "./components/atoms/BtnAddOclock";
import GetTime from "./components/atoms/GetTime";
import img1 from "./components/atoms/image/img1.png";
import Todo, { TodoData } from "./components/molecules/Todo";
import Modal from "./components/organisms/Modal";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEmptyTodo, setShowEmptyTodo] = useState(true);
  const [showAlarm, setShowAlarm] = useState(true);

  const [todos, setTodos] = useState<TodoData[]>([]);

  const addTime = useCallback(
    ({ h, m, s }: { h: number; m: number; s: number }) => {
      setTodos((state) => [...state, {id:Date.now(), h, m, s, active: false }]);
      setShowModal(false);
    },
    [setTodos]
  );

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
                setShowModal={setShowModal}
                createTime={addTime}
                setShowEmptyTodo={setShowEmptyTodo}
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

        {todos.map((todo, index) => (
          <Todo
            key={index}
            h={todo.h}
            m={todo.m}
            s={todo.s}
            active={todo.active}
            updateActive={(active) => {
              setTodos((state) => {
                state[index].active = active;
                return [...state];
              });
            }}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            />
        ))}
      </div>
    </div>
  );
};

export default App;
