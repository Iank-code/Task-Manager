import { useState, useEffect } from "react";

function Fetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(
      url /*,{
      mode: 'no-cors'
    }*/
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setData(data.data);
        console.log(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err);
        setIsLoading(false);
      });
  }, [url]);

  return { data, isLoading, error, setData };
}

export default Fetch;
