import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
    const emojis = ["😀", "😂", "😍", "😎", "😢"];
    const [votes, setVotes] = useState([0, 0, 0, 0, 0]);
    const [winner, setWinner] = useState("");

    function handleVote(index) {
        let newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    }

    function showWinner() {
        let maxVotes = Math.max(...votes);
        let winnerIndex = votes.indexOf(maxVotes);
        setWinner(emojis[winnerIndex]);
    }

    return (
        <div>
            <h1>Голосування за смайлик</h1>
            {emojis.map((emoji, index) => (
                <div key={index}>
                    <button onClick={() => handleVote(index)}>{emoji}</button>
                    <span> Голоси: {votes[index]}</span>
                </div>
            ))}
            <button onClick={showWinner}>Show Results</button>
            {winner && <h3>🏆 Переможець: {winner}</h3>}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
