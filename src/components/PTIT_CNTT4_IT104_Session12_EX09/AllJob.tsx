import React from "react";
import TaskItem from "./TaskItem"; // import component TaskItem

const AllJob = () => {
  const tasks = [
    { id: 1, text: "Cras justo odio", completed: true },
    { id: 2, text: "Cras justo odio", completed: false },
  ];
  
  return (
    <div>
      <div className="d-flex mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Thêm công việc"
          style={{ marginRight: "12px" }}
        />
        <button className="btn btn-info text-white">THÊM</button>
      </div>
      <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            style={{ backgroundColor: "#fff", color: "#2c3e50" }}
          >
            Tất cả công việc
          </a>
        </li>
      </ul>
      
      {/* Tabs content */}
      <div className="tab-content">
        <div className="tab-pane fade show active">
          <ul className="list-group mb-0">
            {tasks.map(task => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AllJob