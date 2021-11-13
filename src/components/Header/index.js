import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header(props) {
    return (
    <div className="App-header">
        <Link to = "/">
        <img src='poketeam.png' />
        </Link>
    </div>
    );
  }