import React from 'react';

const IndianPlayers = () => {
    const players = [
        "Player A", "Player B", "Player C", "Player D", "Player E",
        "Player F", "Player G", "Player H", "Player I", "Player J"
    ];

    // Destructuring for odd and even team players
    const [oddTeam, evenTeam] = players.reduce((acc, player, index) => {
        acc[index % 2].push(player);
        return acc;
    }, [[], []]);

    // Merge arrays example
    const T20players = ["Player X", "Player Y", "Player Z"];
    const RanjiTrophyPlayers = ["Player P", "Player Q", "Player R"];
    const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

    return (
        <div>
            <h2>Team Division</h2>
            <div style={{ display: 'flex' }}>
                <div style={{ marginRight: '20px' }}>
                    <h3>Odd Team Players</h3>
                    <ul>
                        {oddTeam.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Even Team Players</h3>
                    <ul>
                        {evenTeam.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <h2>Merged Players List</h2>
            <ul>
                {mergedPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};

export default IndianPlayers;