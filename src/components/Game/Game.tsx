import { useMemo, useState } from 'react';
import { Board } from './Board/Board';
import { GameStatus } from './GameStatus/GameStatus';
import { GameHistory } from './GameHistory/GameHistory';
import { Button } from '../Button/Button';
import cn from 'classnames';

import styles from './Game.module.css';

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

type BoardStatus = Array<Array<CellValue>>;

const getInitialStateData = () => {
    return {
        initialTurn: 0,
        initialBoardStatus: [Array.from({ length: 9 })] as BoardStatus,
    };
};

export const Game = () => {
    const { initialTurn, initialBoardStatus } = useMemo(
        getInitialStateData,
        [],
    );

    const [turn, setTurn] = useState<number>(initialTurn);
    const [boardStatus, setBoardStatus] =
        useState<BoardStatus>(initialBoardStatus);

    const [showHistory, setShowHistory] = useState<boolean>(false);

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

    const isDraw = currentBoard.every((el) => el !== undefined);

    const finalStatus = winner ? (
        <>
            The winner is:{' '}
            <span className={cn(styles.player, styles.winner)}>{winner}</span>
        </>
    ) : isDraw ? (
        <span className={styles.draw}>Draw!</span>
    ) : (
        <>
            Next player:{' '}
            <span className={cn(styles.player, styles.next_player)}>
                {nextPlayer}
            </span>
        </>
    );

    const restoreBoard = (turn: number) => {
        setTurn(turn);
    };

    const toggleHistory = () => {
        setShowHistory((p) => !p);
    };

    const restartGameHandler = () => {
        setTurn(initialTurn);
        setBoardStatus(initialBoardStatus);
        setShowHistory(false);
    };

    const toggleHistoryButtonText = !showHistory
        ? 'Show history'
        : 'Hide history';

    return (
        <div className={styles.game_wrapper}>
            <div className={styles.game}>
                <div className={styles.main_board}>
                    <GameStatus status={finalStatus} />
                    <Board
                        cells={currentBoard}
                        onChangeCellValue={changeCellValue}
                        winSquaresIndexes={winSquaresIndexes}
                    />
                </div>
                {showHistory && (
                    <GameHistory
                        turn={boardStatus.length - 1}
                        onRestoreBoard={restoreBoard}
                        currentHistoryTurn={turn}
                        turnCellCoordinatesMap={turnCellCoordinatesMap}
                    />
                )}
            </div>
            <div className={styles.buttons_wrapper}>
                {(!!winner || isDraw) && (
                    <Button
                        className={styles.restart_game_button}
                        onClick={restartGameHandler}
                    >
                        Restart game
                    </Button>
                )}
                <Button
                    className={styles.history_button}
                    onClick={toggleHistory}
                >
                    {toggleHistoryButtonText}
                </Button>
            </div>
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
