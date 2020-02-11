import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Joke() {
  const [joke, setJoke] = useState("");

  const getJoke = () => {
    axios
      .get("https://icanhazdadjoke.com", {
        headers: { Accept: "application/json" }
      })
      .then(res => setJoke(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getJoke();
  }, []);


  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-header">Joke</div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a
            href="#"
            className="btn btn-primary text-white"
            onClick={getJoke}
          >
            get another joke
          </a>
        </div>
      </div>
    </div>
  );
}
