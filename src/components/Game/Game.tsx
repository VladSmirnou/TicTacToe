import { useState } from 'react';
import { Board } from './Board/Board';
import { GameStatus } from './GameStatus/GameStatus';
import { GameHistory } from './GameHistory/GameHistory';

export type CellValue = 'X' | 'O' | null;

export const Game = () => {
    const [turn, setTurn] = useState<number>(0);
    const [winner, setWinner] = useState<CellValue>(null);
    const [boardStatus, setBoardStatus] = useState<Array<Array<CellValue>>>([
        Array.from({ length: 9 }),
    ]);
    const currentBoard = boardStatus[turn];

    if (!winner) {
        const w = calculateWinner(currentBoard);
        if (w) {
            setWinner(w);
            return null;
        }
    }

    const nextPlayer = turn % 2 === 0 ? 'X' : 'O';

    const changeCellValue = (cellIndex: number) => {
        if (winner || boardStatus[turn][cellIndex]) {
            return;
        }
        setBoardStatus((prev) => [
            ...prev.slice(0, turn + 1),
            currentBoard.map((currentCellValue, idx) =>
                idx === cellIndex ? nextPlayer : currentCellValue,
            ),
        ]);
        setTurn((prev) => prev + 1);
    };

    const finalStatus = winner
        ? `The winner is: ${winner}`
        : `Next player: ${nextPlayer}`;

    const restoreBoard = (turn: number) => {
        setTurn(turn);
        if (winner) setWinner(null);
    };

    const s = {
        width: '100vw',
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        justifyContent: 'center',
        alignContent: 'center',
        columnGap: '15px',
    };

    return (
        <div style={s}>
            <GameStatus status={finalStatus} />
            <Board cells={currentBoard} onChangeCellValue={changeCellValue} />
            <GameHistory
                turn={boardStatus.length - 1}
                onRestoreBoard={restoreBoard}
            />
        </div>
    );
};

function calculateWinner(squares: Array<CellValue>) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
