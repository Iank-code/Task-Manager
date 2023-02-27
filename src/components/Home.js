import FetchHook from "./hooks/Fetch.js";
import React, { useState } from "react";

function Home() {
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/posts");

  const { data, isLoading, error } = FetchHook(url);
  const handleButtonClick = () => {
    setUrl("https://jsonplaceholder.typicode.com/comments");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
      <button onClick={handleButtonClick}>Load Comments</button>
    </div>
  );
}
export default Home;
