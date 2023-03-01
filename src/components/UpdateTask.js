import React, { useState } from "react";

function UpdateTask({ id }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const submitChanges = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/patch/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error(r.status);
        }
        r.json()
    })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <form onSubmit={submitChanges}>
        <label>
          Set Name:{" "}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Set Description:{" "}
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default UpdateTask;
