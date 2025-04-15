export type GameHistoryProps = {
    turn: number;
    onRestoreBoard: (turn: number) => void;
    currentHistoryTurn: number;
    turnCellCoordinatesMap: {
        [key: string]: Array<number>;
    };
};

export type SortDirection = 'ascending' | 'descending';
