import React from "react";
import { useEffect, useState } from "react";
import './Main.css';

export default function Main() {
    const[game, setGame] = useState(null);
    useEffect(() => {
        fetch("https://api.rawg.io/api/games?key=e2271e50563d4b30b61e026b0ee9ea35&page=1&page_size=4", {
            method: 'GET',
            ContentType: 'application/json',
        })
        .then(response => response.json())
        .then(game => {
            setGame(game.results);
            console.log(game.results);
        }).catch(err => console.log(err));

    }, []);
    const [game2, setGame2] = useState(null);
    useEffect(() => {
        fetch("https://api.rawg.io/api/games?key=e2271e50563d4b30b61e026b0ee9ea35&page=2&page_size=4", {
            method: 'GET',
            ContentType: 'application/json',
        })
        .then(response => response.json())
        .then(game2 => {
            setGame2(game2.results);
            console.log(game2.results);
        }).catch(err => console.log(err));

    }, []);

    return (
        <div>
            <h1>Melhores jogos Metacritc</h1>
        <div className="div-GameName">
            
            {game && game.map((game) => (
                <div className="divGN" key={game.id}>
                    <h1 className="h1-GameName">{game.name}</h1>
                    <img className="img-GameName" src={game.background_image} alt={game.name} />
                    <h2 className="h2-GameName">{game.rating}</h2>
                    <p className="p-GameName">{game.description_raw}</p>
                    <h4 className="p-GameName">{game.platforms[0].platform.name}</h4>
                </div>
            ))}
        </div>
        <div className="div-GameName2">
        {game2 && game2.map((game2) => (
                <div className="divGN" key={game2.id}>
                <h1 className="h1-GameName">{game2.name}</h1>
                <img className="img-GameName" src={game2.background_image} alt={game.name} />
                <h2 className="h2-GameName">{game2.rating}</h2>
                <p className="p-GameName">{game2.description_raw}</p>
                <h4 className="p-GameName">{game2.platforms[0].platform.name}</h4>
            </div>
            ))}
        </div>
        </div>
    );
    }