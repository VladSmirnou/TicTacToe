export type HistorySlotProps = {
    turn: number;
    onRestoreBoard: (turn: number) => void;
    currentHistoryTurn: number;
    cellCoordinates: Array<number>;
};
