import React, { useState } from "react";
import UsePatch from "./hooks/UsePatch";

function UpdateTask({ id }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const body = {
    name: name,
    description: description,
  };
  const submitChanges = (e) => {
    e.preventDefault();
    const { error } = UsePatch(
      `http://localhost:9292/patch/${id}`,
      body
    );

    if(error){
      console.log(error)
    }
    window.location.reload();
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
