import React from "react";
import Header from "./Header";
import AddTask from "./AddTask";
import AllJob from "./AllJob";




export default function TodoListIndex() {
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <Header />
                  <AddTask></AddTask>
                  <AllJob></AllJob>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}