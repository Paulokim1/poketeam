import React from "react";
import "./index.css";
import Search from "../../components/Search";
import PokemonBox from "../PokemonBox";
import axios from "axios"
import { useState, useEffect } from "react";



export default function Team(props) {
  const [pokemons, setPokemons] = useState(); 

  const loadData = () => {
    axios
      .get("https://sleepy-cove-78935.herokuapp.com/")
      .then((res) => setPokemons(res.data));
  }

  useEffect(() => {
    loadData();
  }, [pokemons])

  

  return (
    <div className = 'TeamsContainer'>
    <Search/>
    <p1 className="Title">My Team:</p1>
    <div className='pokemonTeam'>
    {pokemons ? pokemons.map(pokemon => (
      <PokemonBox 
      id={pokemon.id} 
      name={pokemon.title} 
      type = {pokemon.content} 
      src_img = {pokemon.img}>
      </PokemonBox>
    )): null}
    </div>
    
    </div>
  );
}