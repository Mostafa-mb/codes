import React from "react";
import "./Buttons.css";

function Buttons({ onOpenModal }) {
  return (
    <div className="mt-14 border-b w-full border-zinc-200 flex items-center py-3 justify-between">
      <div></div>
      <div className="flex items-center gap-2">
        <div className="dropdown">
          <input id="dd-toggle" type="checkbox" hidden />

          <label className="dd-btn" htmlFor="dd-toggle">
            <span>نمایش فقط</span>
            <i className="fa-solid fa-chevron-down"></i>
          </label>

          <div className="dropdown_menu" role="menu">
            <div className="dropdown-label">
              <p className="text-start text-xs opacity-60">نمایش فقط</p>
            </div>
            <div className="py-1">
              <label htmlFor="dd-toggle" className="menu-item">
                همه
              </label>
              <label htmlFor="dd-toggle" className="menu-item">
                تکمیل شده ها
              </label>
              <label htmlFor="dd-toggle" className="menu-item">
                در انتظار انجام
              </label>
            </div>
          </div>
        </div>

        <button id="open-dialog" className="" onClick={onOpenModal}>
          <span> ایجاد جدید </span>
          <div className="btn-divider"></div>
          <span>
            <i className="fa-solid fa-plus"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Buttons;
