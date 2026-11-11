import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "./api/api.js";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: "foo",
      body: "bar",
      userId: 1,
    };

    api
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((response) => {
        console.log("new post added: ", response.data);
        setData([response.data]);
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/users"),
      ])
      .then(
        axios.spread((posts, users) => {
          console.log(posts);
          console.log(users);

          setData(posts.data);
          setLoading(false);
        }),
      )
      .catch((err) => {
        console.log("Error fetching data: ", err);
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading ....</p>;
  }

  if (error) {
    return <p>{error} </p>;
  }
  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>API's </h2>
      <button onClick={handleSubmit}>Add Posts</button>
      <ul>
        {data.map((post) => (
          <li>
            <p>Title: {post.title}</p>
            <p>Body: {post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
