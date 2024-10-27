type Props = {
    turn: number;
    onRestoreBoard: (turn: number) => void;
    currentHistoryTurn: number;
};

export const HistorySlot = ({
    turn,
    currentHistoryTurn,
    onRestoreBoard,
}: Props) => {
    const handleResotreBoard = () => {
        onRestoreBoard(turn);
    };

    const buttonText = turn === 0 ? 'Go to game start' : `Go to move #${turn}`;
    return (
        <li>
            {currentHistoryTurn === turn ? (
                <div>You are at move #{currentHistoryTurn}</div>
            ) : (
                <button onClick={handleResotreBoard}>{buttonText}</button>
            )}
        </li>
    );
};
