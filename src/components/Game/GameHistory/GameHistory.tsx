import { HistorySlot } from './HistorySlot/HistorySlot';

type Props = {
    turn: number;
    onRestoreBoard: (turn: number) => void;
};

export const GameHistory = ({ turn, onRestoreBoard }: Props) => {
    const s = {
        listStyle: 'decimal',
    };

    const historySlots = [];
    for (let i = 0; i <= turn; i++) {
        historySlots.push(
            <HistorySlot key={i} turn={i} onRestoreBoard={onRestoreBoard} />,
        );
    }

    return <ul style={s}>{historySlots}</ul>;
};
