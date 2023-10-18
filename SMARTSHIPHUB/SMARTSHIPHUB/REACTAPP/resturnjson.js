
import { useState } from "react";
import { useEffect } from "react";
function JsonData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default JsonData;
