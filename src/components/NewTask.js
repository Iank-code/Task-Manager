import React, { useRef } from "react";
import UsePost from "./hooks/UsePost";

function NewTask() {
    const nameRef = useRef()
    const categoryRef = useRef()
    const descriptionRef = useRef();

    
    const submitTask = (e)=>{
        e.preventDefault();
        const body = {
          name: nameRef.current.value,
          category: categoryRef.current.value,
          description: descriptionRef.current.value,
        };

        console.log(body)
        const {error} = UsePost("http://localhost:9292/post", body)
    }

  return (
    <div>
      <form onSubmit={submitTask}>
        <label>
          Name: <input ref={nameRef} required />
        </label>
        <label>
          Category: <input ref={categoryRef} />
        </label>
        <label>
          Description: <input ref={descriptionRef} />
        </label>

        <button type="submit">Submit Task</button>
      </form>
    </div>
  );
}

export default NewTask;
