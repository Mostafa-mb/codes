import { useState } from "react";
import "./App.css";
import Buttons from "./assets/components/Buttons/Buttons";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";
import Modal from "./assets/components/Modal/Modal";
import Task from "./assets/components/Task/Task";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const closeModal = () => {
    setIsShowModal(false);
  };
  const showModal = () => {
    setIsShowModal(true);
  };
  const addTodos = (title, description, isImportant) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      description,
      isImportant,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
    closeModal();
  };

  const completeTodos = (id) => {
    console.log(id);
    const todoItem = todos.find((item) => {
      return item.id === id;
    });
    todoItem.isComplete = true;
    console.log(todos);
  };

  const undoneTodos = () => {
    const result = todos.filter((item) => {
      return item.isComplete === false;
    });
  };

  return (
    <>
      <Header></Header>
      <main className="container pb-25">
        <div id="headline" className="space-y-3">
          <h1 className="title">
            <img src="./public/images/hourglass.png" className="size-8" />
            <span> مدیریت و برنامه ریزی </span>
          </h1>
          <p className="max-w-[750px] text-zinc-700 text-sm font-Vazir-Medium!">
            سبز تسک ابزاری قدرتمند برای سازماندهی وظایف روزمره، برنامه‌ریزی
            پروژه‌ها و افزایش بهره‌وری شماست. با رابط کاربری ساده و امکانات
            پیشرفته، از پیگیری وظایف تا همکاری تیمی را به آسانی مدیریت کنید.
          </p>
        </div>

        <Buttons onOpenModal={showModal}></Buttons>

        <section id="tasks" className="space-y-30 mt-5">
          <div className="space-y-5">
            <p className="text-sm">تسک های موجود:</p>
            {todos.map(
              (todoItem) =>
                !todoItem.isComplete && (
                  <Task
                    key={todoItem.id}
                    todo={todoItem}
                    onCompleteTodo={completeTodos}
                  ></Task>
                ),
            )}
          </div>
          <div className="space-y-5">
            <p className="text-sm">تسک‌های تکمیل‌شده</p>
            {todos.map(
              (todoItem) =>
                todoItem.isComplete && (
                  <Task
                    key={todoItem.id}
                    todo={todoItem}
                    onCompleteTodo={completeTodos}
                  ></Task>
                ),
            )}
          </div>
        </section>
      </main>

      {isShowModal && (
        <Modal onCloseModal={closeModal} onAddTodo={addTodos}></Modal>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
