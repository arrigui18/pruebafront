import React, { useState, useEffect } from 'react';
import '../App.css';
import { GameStreamsGet } from '../services/api';

function GameStreams({ match, location }) {
    const [dataStreams, setDataStreams] = useState([]);
    const gameID = location.state.gameID;

    useEffect(() => {
        const ID = gameID;
        GameStreamsGet(ID).then((response) => {
            setDataStreams(response.data.data);
        })
    }, [])

    return (
        <div className="container pt-3">
            <h5>{match.params.id} Streams</h5>
            <hr />
            <div className="row">
                {dataStreams.map((stream, i) => {
                    let image = stream.thumbnail_url.replace('{width}', '300').replace('{height}', '300');
                    return (
                        <div className="col-4 my-3" key={i}>
                            <div className="card">
                                <img className="card-img-top" src={image} alt="img" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{stream.user_name}</h5>
                                    <div className="d-flex justify-content-center">
                                        {stream.viewer_count} vistas en vivo
                                    </div>
                                    <button className="btn btn-success text-white">
                                        <a className="link text-white" href={"https://twitch.tv/" + stream.user_name} target="_blank">
                                            Ver canal de {stream.user_name}
                                        </a>
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

export default GameStreams;