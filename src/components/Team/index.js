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
      .get("http://localhost:8000/api/notes/")
      .then((res) => setPokemons(res.data));
  }

  useEffect(() => {
    loadData();
  }, [pokemons])

  

  return (
    <div className = 'TeamsContainer'>
    <Search/>

    {pokemons ? pokemons.map(pokemon => (
      <PokemonBox 
      id={pokemon.id} 
      name={pokemon.title} 
      type = {pokemon.content} 
      src_img = {pokemon.img}>
      </PokemonBox>
    )): null}
    
    </div>
  );
}