import React, { useState } from "react";

const NewTask = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const submitTask = (e) => {
    e.preventDefault();
    fetch("http://localhost:9292/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        category: category,
        description: description,
      }),
    })
      .then((res) => res.json())
      .catch((error) => {
        console.error(error.message);
      });

    // window.location.reload()
  };

  return (
    <form onSubmit={submitTask}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
      {/* {data && <p>Task created with ID: {data.id}</p>} */}
      {error && <p>Error creating task: {error.message}</p>}
    </form>
  );
};

export default NewTask;
