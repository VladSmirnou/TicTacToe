import { HistorySlot } from './HistorySlot/HistorySlot';

type Props = {
    turn: number;
    onRestoreBoard: (turn: number) => void;
    currentHistoryTurn: number;
};

export const GameHistory = ({
    turn,
    currentHistoryTurn,
    onRestoreBoard,
}: Props) => {
    const s = {
        listStyle: 'decimal',
    };

    const historySlots = [];
    for (let i = 0; i <= turn; i++) {
        historySlots.push(
            <HistorySlot
                key={i}
                turn={i}
                currentHistoryTurn={currentHistoryTurn}
                onRestoreBoard={onRestoreBoard}
            />,
        );
    }

    return <ul style={s}>{historySlots}</ul>;
};
