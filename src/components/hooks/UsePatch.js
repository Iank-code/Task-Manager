import { useState, useEffect } from "react";

function usePatch(url) {
  const [error, setError] = useState(null);
  const [patchResponse, setPatchResponse] = useState(null);

  const patch = (body) => {
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
      .then((data) => {
        setPatchResponse(data.data);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err);
      });
  };

  useEffect(() => {
    setPatchResponse(null);
    setError(null);
  }, [url]);

  return { error, patchResponse, patch };
}

export default usePatch;
