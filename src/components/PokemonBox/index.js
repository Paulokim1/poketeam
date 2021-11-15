import React from "react";
import "./index.css";
import axios from "axios"
import { useState, useEffect } from "react";

export default function PokemonBox(props) {

  const deletePokemon = (event) => {
    event.preventDefault();
    axios.post(`https://sleepy-cove-78935.herokuapp.com/delete/${props.id}`)
  }

  return (
    <div className = 'pokemonBoxContainer'>
      <div className='headerPokemonBox'>
        <button className='delete' onClick={deletePokemon}>&#10060;</button>
      </div>

      <div className='bodyPokemonBox'>
        <img className="imagemPokemon" src={props.src_img}></img>
        <div className='infos'>
          <b>Name: {props.name}</b>
          <b>Main Type: {props.type}</b>
        </div>
      </div>
      
      </div>
  );
}