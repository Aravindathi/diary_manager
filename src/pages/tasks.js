import React from "react";
import Activity from "./activity";
import "./tasks.css";
import { useState } from "react";
import AddTaskModal from "./addTaskModal";
import { useEffect } from "react";

const Tasks = ({month,date}) => {
  let userId = localStorage.getItem("userId")
  // const [data,setData] = useState({})
  
  const [showModal, setShowModal] = useState(false);
  // useEffect(() => {
  fetch(`https://diarymanager.herokuapp.com/schedule/${month}/${date}/${userId}`)
      .then((response) => response.json())
      .then((res) => datamap(res))
      .catch((error) => {
        console.log("Sorry no schedule date for today")
      });
  // })

  const datamap = (data) => {
     console.log(data)
  }
    
  const addTaskHandler = () => {
    setShowModal(true);
    
  };
  return (
    <>
      {showModal && (
        <AddTaskModal setShowModal={setShowModal} date={date} month={month}/>
      )}

      <div className="taskPage-layout">
        <button className="addTask-btn" onClick={addTaskHandler}>
          <span className="task-plus">+ </span>ADD
        </button>
        <div className="task-chart">
          <div className="task-time">
            <div>SLOTS</div>
            <div className="time-box">09:00 am - 10:30 am</div>
            <div className="time-box">10:30 am - 12:00 pm</div>
            <div className="time-box">12:00 pm - 01:30 pm</div>
            <div className="time-box">01:30 pm - 03:00 pm</div>
            <div className="time-box">03:00 pm - 04:30 pm</div>
            <div className="time-box">04:30 pm - 06:00 pm</div>
            <div className="time-box">06:00 pm - 07:30 pm</div>
            <div className="time-box">07:30 pm - 09:00 pm</div>
          </div>
          <div className="tasks-box">
            <div>Schedule and tasks</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tasks;
