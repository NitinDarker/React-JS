import { useState } from "react";
import "./App.css"

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [player, setPlayer] = useState(true);
    // True = Player 1
    // False = Player 2

    const currentBoard = history[history.length - 1];

    function handlePlay(updatedBoard) {
        setHistory([...history, updatedBoard]);
        if (calculateWinner(updatedBoard)) {
            gameWon(player);
            const newArr = [Array(9).fill(null)];
            setHistory(newArr);
            setPlayer(true);
            return;
        }
        setPlayer(!player);
    }

    function timeTravel(i) {
        const pastArr = history.filter((arr, ind) => {
            if (ind <= i) return true;
        });
        setHistory(pastArr);
        if (i % 2 == 0) setPlayer(true);
        else setPlayer(false);
    }

    const moves = history.map((values, ind) => {
        let desc;
        if (ind > 0) {
            desc = "Go to move #" + ind;
        } else {
            desc = "Go to game start";
        }
        return (
            <li className="movesList" key={ind}>
                <button className="timeBtn" onClick={() => timeTravel(ind)}>{desc}</button>
            </li>
        )
    })

    return (
        <div className="container">
            <Board value={currentBoard} player={player} handlePlay={handlePlay}/>
            <Machine travels={moves}/>
        </div>
    )
}

function Board({value, player, handlePlay}) {
    function onClickHandler(i) {
        if (value[i] != null) {
            return;
        }
        
        let currSign;
        const newValueArray = value.slice();
        player ? currSign = 'X' : currSign = 'O'
        newValueArray[i] = currSign;
        handlePlay(newValueArray);
    }

  return (
    <div className="board">
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
    </div>
  );
}

function Machine({travels}) {
    return (
        <div className="machine">
            <h2>Time Machine:</h2>
            <ul>{travels}</ul>
        </div>
    )
}

function Tile({value, onClick}) {
    return (
        <button className="Tile" onClick={onClick}>{value}</button>     
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