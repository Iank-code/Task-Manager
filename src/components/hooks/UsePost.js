import { useState, useEffect } from "react";
function UsePost({ url, body }) {
//   const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .catch((error) => setError(error));
    //   .then((data) => setData(data));
  }, [url, body]);
  return { error };
}

export default UsePost;
