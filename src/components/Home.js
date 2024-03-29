import FetchHook from "./hooks/Fetch.js";
import NewTask from "./NewTask.js";
import React, { useState } from "react";
import List from "./List.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState(false);
  const [completedFilter, setCompletedFilter] = useState(false);
  const { data, isLoading, error, setData } = FetchHook(
    "https://sinatra-web-app.onrender.com/all"
  );
  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const deletePost = (id) => {
    fetch(`https://sinatra-web-app.onrender.com/delete/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    setData(data.filter((item) => item.id !== id));
  };

  const toggleCompleted = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const filteredData = completedFilter
    ? data.filter((item) => item.completed)
    : data;

  return (
    <div
      className="listSection"
      style={{
        marginBottom: "3rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2>Welcome to Task Manager</h2>
      <h4>This is a platform where you can write tasks Which you plan to do</h4>
      <img src={require("../assets/task-img.png")} alt="task_img" />
      <button
        className="logOutBtn"
        style={{
          float: "left",
        }}
        onClick={() => navigate("/")}
      >
        Log Out
      </button>

      <p
        style={{
          marginLeft: "-9rem",
        }}
      >
        Click here to add task 👇
      </p>
      <button
        style={{
          backgroundColor: "transparent",
          color: "black",
        }}
        onClick={() => setNewTask(!newTask)}
      >
        Add Task
      </button>
      {newTask ? <NewTask /> : ""}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 10px",
        }}
      >
        <div>
          <input
            type="checkbox"
            id="completedFilter"
            name="completedFilter"
            checked={completedFilter}
            onChange={(e) => setCompletedFilter(e.target.checked)}
          />
          <label htmlFor="completedFilter">Show completed tasks only</label>
        </div>

        <div className="itemList">
          {filteredData &&
            filteredData.map((item) => {
              return (
                <List
                  data={item}
                  key={item.id}
                  id={item.id}
                  checkDone={() => toggleCompleted(item.id)}
                  deleteItem={() => deletePost(item.id)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
