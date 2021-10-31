import React from "react";
import "./addTaskModal.css";

const AddTaskModal = ({ setShowModal, month,date}) => {
  const newTaskSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value, e.target[2].value);
    //
    // The post request to add date to DB
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        month: month,
        date: date,
        id: localStorage.getItem("userId"),
        taskName: e.target[0].value,
        taskDesc: e.target[2].value,
        taskTime: e.target[1].value,
      }),
    };
    fetch("https://diarymanager.herokuapp.com/schedule/addtask", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(res));
    //  code ends here
  };
  return (
    <div className="addTask-modal-bg" onClick={() => setShowModal(false)}>
      <form
        className="addTask-modal-box"
        onClick={(e) => e.stopPropagation()}
        onSubmit={newTaskSubmitHandler}
      >
        <div className="addTask-modal-left">
          <label htmlFor="taskName">Task Name</label>
          <br />
          <input type="text" name="taskName" id="taskName"></input>
          <br />
          <label htmlFor="taskTime">Time</label>
          <br />
          <select name="schedule" id="schedule">
            <option value="1">09:00 am-10:30 am</option>
            <option value="2">10:30 am-12:00 pm</option>
            <option value="3">12:00 pm-01:30 pm</option>
            <option value="4">01:30 pm-03:00 pm</option>
            <option value="5">03:00 pm-04:30 pm</option>
            <option value="6">04:30 pm-06:00 pm</option>
            <option value="7">06:00 pm-07:30 pm</option>
            <option value="8">07:30 pm-09:00 pm</option>
          </select>
        </div>
        <div className="addTask-modal-right">
          <label htmlFor="taskDescription">Task Description</label>
          <br />
          <textarea
            name="taskDescription"
            id="taskDescription"
            cols="23"
            rows="5"
          ></textarea>
        </div>
        <button type="submit" className="addTaskSubmit-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddTaskModal;
