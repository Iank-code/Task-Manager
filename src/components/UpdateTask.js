import React, { useState } from "react";
import UsePatch from "./hooks/UsePatch";

function UpdateTask({ id }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { error, patchResponse, patch } = UsePatch(
    `http://localhost:9292/patch/${id}`
  );

  const submitChanges = (e) => {
    e.preventDefault();
    patch({
      name: name,
      description: description,
    });
  };

  if (error) {
    console.log(error);
  }

  if (patchResponse) {
    window.location.reload();
  }

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
