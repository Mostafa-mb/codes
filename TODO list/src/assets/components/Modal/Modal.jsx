import React, { useState } from "react";
import "./Modal.css";

// className="is-hidden"
// for hiding the modal

function Modal({ onCloseModal, onAddTodo }) {
  const [title, SetTitle] = useState("");
  const [description, SetDescription] = useState("");
  const [isImportant, SetIsImportant] = useState(false);
  return (
    <div id="modal-screen" className="">
      <div className="modal-content">
        <header className="modal-header">
          <span className="font-IOS-Font! text-sm absolute left-0 right-0 mx-auto! max-w-max! text-[#2b2929] select-none!">
            ایجاد برنامه جدید
          </span>
          <div
            className="btns *:size-3.5 *:cursor-pointer *:rounded-full"
            onClick={onCloseModal}
          >
            <button id="modal-close-button" className=""></button>
          </div>
        </header>
        <main className="my-5 space-y-3">
          <input
            placeholder="عنوان تسک را وارد نمائید ..."
            className="input-element title-input"
            value={title}
            onChange={(e) => SetTitle(e.target.value)}
          />

          <textarea
            className="input-element description-input"
            placeholder="توضیحات تسک را وارد نمائید ..."
            name="description"
            value={description}
            onChange={(e) => SetDescription(e.target.value)}
          ></textarea>
          <div className="my-3 flex items-center gap-2">
            <input
              id="is-important"
              type="checkbox"
              value={isImportant}
              onChange={(e) => SetIsImportant(e.target.checked)}
            />
            <label htmlFor="is-important"> مهم </label>
          </div>
          <div className="info-message">
            <p className="inline-flex! items-center gap-1">
              <img
                src="./public/images/check.png"
                alt="Checked"
                className="size-4"
              />
              <span> لطفا تمامی فیلد هارا تکمیل بفرمایید </span>
            </p>
          </div>
        </main>
        <footer className="mt-5 flex items-center justify-end text-sm pb-3">
          <button
            id="create-button"
            onClick={() => onAddTodo(title, description, isImportant)}
          >
            ایجاد کنید
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Modal;
