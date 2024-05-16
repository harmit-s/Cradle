import { Html } from "@react-three/drei"
import axios from "axios"
import { useState, useEffect } from "react"
import './style.css'

export default function Leaderboard( { setLevel } ) {
    const [playerList, setPlayerList] = useState([]);
    useEffect(() => {
        const players = async () => {
            try {
                const response = await axios.get("https://cradle-backend-fb5105635aaa.herokuapp.com/")
                setPlayerList(response.data);
            }
            catch (error) {
                console.log('error fetching data', error);
            }
        }
        players();
    }, []);

    return (
        <>
            <Html>
                <section className="leaderboard">
                    <h1 className="leaderboard__title">Leaderboard</h1>
                    <div className="leaderboard__sub">
                    <h2 className="leaderboard__subtitle">Rank</h2>
                    <h2 className="leaderboard__subtitle">Player</h2>
                    <h2 className="leaderboard__subtitle">Score</h2>
                    </div>
                    {playerList.map((player, index) => (
                        <div className="leaderboard__players" key={player.id}>
                            <p className="leaderboard__rank">{player.rank}.</p>
                            <h2 className="leaderboard__name">{player.name}</h2>
                            <p className="leaderboard__score">{player.score}</p>
                        </div>
                    ))}
                    <button onClick={() => setLevel(0)} className="leaderboard__button">Home</button>
                </section>
            </Html>
        </>
    )
}