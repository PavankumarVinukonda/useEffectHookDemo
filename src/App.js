import { useState, useEffect } from "react";

const App = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("comments")}>posts</button>

      <h1>
        {items.map((item) => {
          return <pre> {JSON.stringify(item)} </pre>;
        })}
      </h1>
    </div>
  );
};

export default App;
