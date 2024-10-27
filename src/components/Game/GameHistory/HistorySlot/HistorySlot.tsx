type Props = {
    turn: number;
    onRestoreBoard: (turn: number) => void;
    currentHistoryTurn: number;
    cellCoordinates: Array<number>;
};

export const HistorySlot = ({
    turn,
    currentHistoryTurn,
    onRestoreBoard,
    cellCoordinates,
}: Props) => {
    const handleResotreBoard = () => {
        onRestoreBoard(turn);
    };

    const [row, column] = cellCoordinates;

    const coordinatesString = `; [row: ${row}, column: ${column}]`;

    const buttonText =
        turn === 0
            ? 'Go to game start'
            : `Go to move #${turn}${coordinatesString}`;
    return (
        <li>
            {currentHistoryTurn === turn ? (
                <div>
                    You are at move #{currentHistoryTurn}
                    {currentHistoryTurn !== 0 ? coordinatesString : ''}
                </div>
            ) : (
                <button onClick={handleResotreBoard}>{buttonText}</button>
            )}
        </li>
    );
};
