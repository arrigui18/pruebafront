import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GamesGet } from '../services/api';

function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        GamesGet().then((response) => {
            setGames(response.data.data);
        })
    }, [])

    return (
        <div className="container pt-3">
            <h5>Juegos mas Populares</h5>
            <hr />
            <div className="row">
                {games.map((game, i) => {
                    let image = game.box_art_url.replace('{width}', '300').replace('{height}', '300');
                    return (
                        <div className="col-4 my-3" key={i}>
                            <div className="card">
                                <img className="card-img-top" src={image} alt="img" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{game.name}</h5>
                                    <button className="btn btn-success text-white">
                                        <Link className="link text-white" to={{ pathname: "game/" + game.name, state: { gameID: game.id } }}>
                                            {game.name} streams{" "}
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Games;