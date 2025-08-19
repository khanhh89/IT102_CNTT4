import React from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const TaskItem = ({ task }: { task: Task }) => {
  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between task-item"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <input
          className="form-check-input me-2"
          type="checkbox"
          checked={task.completed}
          readOnly
        />
        <span className={task.completed ? 'completed' : ''}>
          {task.text}
        </span>
      </div>
      <div>
        <a href="#!" className="text-info me-3 action-btn" title="Sửa công việc">
          <i className="fas fa-pencil-alt" />
        </a>
        <a href="#!" className="text-danger action-btn" title="Xóa công việc">
          <i className="fas fa-trash-alt" />
        </a>
      </div>
    </li>
  );
};

export default TaskItem;
