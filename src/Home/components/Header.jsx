import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    return (
        <div className="div-Header">
            <Link className="h1-Header">The Game List</Link>
            <Link className="linkHeader">Promoções</Link>
            <Link className="linkHeader">Games</Link>
            <Link className="linkHeader">Gêneros</Link>
            <Link className="linkHeader">Plataformas</Link>
        </div>
    );
}
