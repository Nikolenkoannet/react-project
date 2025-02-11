import React from "react";

const [state, setState] = React.useState(0);

export default function EmojiVoting() {
    const emojis = ["😀", "😂", "😍", "😎", "😢"];
    const [votes, setVotes] = useState([0, 0, 0, 0, 0]);
    const [winner, setWinner] = useState("");

    function handleVote(index) {
        let newVotes = [...votes];
        newVotes[index] = newVotes[index] + 1;
        setVotes(newVotes);
    }

    function showWinner() {
        let maxVotes = Math.max(...votes);
        let winnerIndex = votes.indexOf(maxVotes);
        setWinner(emojis[winnerIndex]);
    }

    return (
        <div>
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