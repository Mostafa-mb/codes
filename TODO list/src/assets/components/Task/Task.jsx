import React from "react";
import "./Task.css";

function Task({ todo, onCompleteTodo }) {
  return (
    <div className="space-y-0.5">
      <article className="task-card">
        <div className="task-content">
          <div>
            <h3>{todo?.title}</h3>
            <p className="task-desc">{todo?.description}</p>
          </div>
        </div>

        <div className="moderate">
          <div className="flex items-center **:min-w-max gap-2">
            {todo?.isComplete && (
              <span className="status-label completed">تکمیل شده</span>
            )}

            {todo?.isImportant && <span className="priority code-1">مهم</span>}
          </div>

          <div className="moderate-btns">
            <button className="complete-task">
              <i
                className="fa-solid fa-circle-check"
                onClick={() => onCompleteTodo(todo.id)}
              ></i>
            </button>

            <button className="undone-btn">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Task;
