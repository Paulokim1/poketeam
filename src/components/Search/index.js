import React from "react";
import "./index.css";
import axios from "axios"
import { useState, useEffect } from "react";


export default function Home(props) {

  const [pokemon, setPokemon] = useState("")
  const [pokemonType, setPokemonType] = useState("")
  const [searchPokemon, setSearchPokemon] = useState("")
  const [sprite, setSprite] = useState("")

  const findPokemon = (event) => {
    event.preventDefault();
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      .then((res) => {
        setPokemon(res.data.name)
        setPokemonType(res.data.types[0].type.name)
        setSprite(res.data.sprites.versions['generation-viii'].icons.front_default)
        })
  ;}

  const addPokemon = (event) => {
    event.preventDefault();
    if (pokemon){
      if (pokemonType){
        axios.post('http://localhost:8000/api/notes/', {'title':pokemon,'content':pokemonType, 'img':sprite})
      }
    }
  }

  const searchChanged = (event) =>{
    setSearchPokemon(event.target.value);
  }

  return (
    <div className = 'TeamsContainer'>
      <input
      className="form-card-title"
      type="text"
      name="titulo"
      placeholder="Type the pokemon's name"
      value={searchPokemon}
      onChange={searchChanged}
      />
      <button className="btn" onClick={findPokemon}>Search</button>
      <button className="btn" onClick={addPokemon}>Add</button>

      <div className="informacoes">
        <div> Pokemon's type is: {pokemonType} </div>
        <img src = {`${sprite}`}></img>
      </div>

      
    </div>
  );
}