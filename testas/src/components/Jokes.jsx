import React from "react";
// import JokeData from "../data/JokeData";
import Joke from "./Joke";
import { useState } from "react";
import "./Jokes.css";

// fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10gautus duomenis patalpinti į komponentus.Kiekvienas komponentas turi atvaizduoti juokelį su setup ir delivery arba joke.Panaudoti css stilių, kuris padarytų UI gražesnį')
//     .then(response=>response.json())
//     .then(data=>setJokeData(data))

//     console.log(jokeData)

const Jokes = () => {
  const [jokeData, setJokeData] = useState([]);

  const getJokeRequest = async () => {
    const url = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&amount=10gautus`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.jokes) {
      setJokeData(responseJson.jokes);
    }
  };
  return (
    <div className="container">
      <div className="center">
        <button className="btn-primary btn mb-2 mt-1" onClick={getJokeRequest}>
          Get some jokes
        </button>
      </div>
      <div className="row">
        {jokeData.map((jk) => (
          <Joke
            key={jk.id}
            setup={jk.setup}
            delivery={jk.delivery}
            joke={jk.joke}
            category={jk.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Jokes;
