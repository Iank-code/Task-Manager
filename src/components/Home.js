import FetchHook from "./hooks/Fetch.js";
import NewTask from "./NewTask.js";
import React, { useState } from "react";
import List from "./List.js";

function Home() {
  const [url, setUrl] = useState("http://localhost:9292/all");

  const [newTask, setNewTask ] = useState(false);
  const { data, isLoading, error, setData } = FetchHook(url);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const deletePost = (id) => {
    console.log(id)
    fetch(`http://localhost:9292/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
  };

  return (
    <div
      className="listSection"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <button onClick={() => setNewTask(!newTask)}>Add Task</button>
      {newTask ? <NewTask /> : "" }

      {data &&
        data.map((item) => {
          return (
            <List
              data={item}
              key={item.id}
              deletePost={() => deletePost(item.id)}
            />
          );
        })}
    </div>
  );
}
export default Home;
