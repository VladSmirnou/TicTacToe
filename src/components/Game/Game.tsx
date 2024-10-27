import { useState } from 'react';
import { Board } from './Board/Board';
import { GameStatus } from './GameStatus/GameStatus';
import { GameHistory } from './GameHistory/GameHistory';

function* zip<T>(...arrays: Array<Array<T>>) {
    for (let i = 0; i < arrays[0].length; i++) {
        yield arrays.map((el) => el[i]);
    }
}

export type CellValue = 'X' | 'O' | null;

type A = {
    [key: string]: Array<number>;
};

function getRow(idx: number) {
    if (idx <= 2) return 1;
    if (3 <= idx && idx <= 5) return 2;
    return 3;
}

function getColumn(idx: number) {
    if ([0, 3, 6].includes(idx)) return 1;
    if ([1, 4, 7].includes(idx)) return 2;
    return 3;
}

export const Game = () => {
    const [turn, setTurn] = useState<number>(0);
    const [boardStatus, setBoardStatus] = useState<Array<Array<CellValue>>>([
        Array.from({ length: 9 }),
    ]);

    const turnCellCoordinatesMap: A = {
        0: [],
    };

    let idx = 0;
    if (boardStatus.length > 1) {
        for (let turn = 1; turn < boardStatus.length; turn++) {
            const first = boardStatus[turn - 1];
            const second = boardStatus[turn];
            for (const [fValue, sValue] of zip(first, second)) {
                if (fValue !== sValue) {
                    const row = getRow(idx);
                    const column = getColumn(idx);
                    turnCellCoordinatesMap[turn] = [row, column];
                }
                idx++;
            }
            idx = 0;
        }
    }

    const currentBoard = boardStatus[turn];

    const result = calculateWinner(currentBoard);

    let winner: string | null = null;
    let winSquaresIndexes: Array<number> | null = null;

    if (result) {
        ({ winner, winSquaresIndexes } = result);
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
        : currentBoard.every((el) => el !== undefined)
          ? 'Draw!'
          : `Next player: ${nextPlayer}`;

    const restoreBoard = (turn: number) => {
        setTurn(turn);
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
            <Board
                cells={currentBoard}
                onChangeCellValue={changeCellValue}
                winSquaresIndexes={winSquaresIndexes}
            />
            <GameHistory
                turn={boardStatus.length - 1}
                onRestoreBoard={restoreBoard}
                currentHistoryTurn={turn}
                turnCellCoordinatesMap={turnCellCoordinatesMap}
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
            return {
                winner: squares[a],
                winSquaresIndexes: [a, b, c],
            };
        }
    }
    return null;
}
