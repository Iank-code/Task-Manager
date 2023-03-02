import { useState, useEffect } from "react";

function usePatch(url, body) {
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((r) => {
        if (!r.ok) {
          throw new Error(r.status);
        }
        return r.json();
      })
      .catch((err) => {
        console.error(err.message);
        setError(err);
      });
  }, [url,body]);

  return { error };
}

export default usePatch;
