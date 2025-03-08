import { useState } from "react";
import "./App.css"
 
export default function Board() {
    const [value, setValue] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(true);
    // True = Player 1
    // False = Player 2

    function onClickHandler(i) {
        if (value[i] != null) {
            return;
        }
        const newValueArray = value.slice();
        let currSign;
        player ? currSign = 'X' : currSign = 'O'
        newValueArray[i] = currSign;
        setValue(newValueArray);

        if (calculateWinner(newValueArray)) {
            gameWon(player);
            const arr = Array(9).fill(null);
            setValue(arr);
            setPlayer(true);
            return;
        }
        setPlayer(!player);
    }

  return (
    <>
        <h1>Tic-Tac-Toe</h1>
        <h3>Player {player ? 1 : 2}'s Turn ({player ? 'X' : 'O'})</h3>
        <div className="Row">
            <Tile value={value[0]} onClick={() => onClickHandler(0)}/>
            <Tile value={value[1]} onClick={() => onClickHandler(1)}/>
            <Tile value={value[2]} onClick={() => onClickHandler(2)}/>
        </div>
        <div className="Row">
            <Tile value={value[3]} onClick={() => onClickHandler(3)}/>
            <Tile value={value[4]} onClick={() => onClickHandler(4)}/>
            <Tile value={value[5]} onClick={() => onClickHandler(5)}/>
        </div>
        <div className="Row">
            <Tile value={value[6]} onClick={() => onClickHandler(6)}/>
            <Tile value={value[7]} onClick={() => onClickHandler(7)}/>
            <Tile value={value[8]} onClick={() => onClickHandler(8)}/>
        </div>
    </>
  );
}

function Tile({value, onClick}) {
    return (
        <>
            <button className="Tile" onClick={onClick}>{value}</button>    
        </>
    )
}

function calculateWinner(arr) {
    const winning = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]; // All winning positions

    for (let i = 0; i < winning.length; i++) {
        const [a, b, c] = winning[i];
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return true;
        }
    }
    return false;
}

function gameWon(player) {
    const winner = player ? 1 : 2;
    alert("Player " + winner + " won the game!");
}