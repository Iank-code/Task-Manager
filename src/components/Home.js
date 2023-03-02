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
    "http://localhost:9292/all"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const deletePost = (id) => {
    fetch(`http://localhost:9292/delete/${id}`, {
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
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button onClick={() => navigate("/register")}>Log Out</button>
      <button onClick={() => setNewTask(!newTask)}>Add Task</button>
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
      {newTask ? <NewTask /> : ""}

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
  );
}

export default Home;
