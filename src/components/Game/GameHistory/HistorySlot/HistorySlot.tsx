type Props = {
    turn: number;
    onRestoreBoard: (turn: number) => void;
};

export const HistorySlot = ({ turn, onRestoreBoard }: Props) => {
    const handleResotreBoard = () => {
        onRestoreBoard(turn);
    };

    const buttonText = turn === 0 ? 'Go to game start' : `Go to move #${turn}`;
    return (
        <li>
            <button onClick={handleResotreBoard}>{buttonText}</button>
        </li>
    );
};
