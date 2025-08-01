import React from 'react';

const ListofPlayers = () => {
    const players = [
        { name: "Player 1", score: 85 },
        { name: "Player 2", score: 62 },
        { name: "Player 3", score: 78 },
        { name: "Player 4", score: 92 },
        { name: "Player 5", score: 55 },
        { name: "Player 6", score: 68 },
        { name: "Player 7", score: 72 },
        { name: "Player 8", score: 45 },
        { name: "Player 9", score: 88 },
        { name: "Player 10", score: 60 },
        { name: "Player 11", score: 79 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Scores Below 70</h2>
            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListofPlayers;