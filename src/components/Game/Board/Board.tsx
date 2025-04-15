import { Cell } from './Cell/Cell';

import styles from './Board.module.css';
import type { BoardProps } from './types';

export const Board = ({
    cells,
    winSquaresIndexes,
    onChangeCellValue,
}: BoardProps) => {
    const jsxCells = cells.map((cell, idx) => {
        return (
            <Cell
                key={idx}
                cellId={idx}
                cellValue={cell}
                onChangeCellValue={onChangeCellValue}
                winCell={!!winSquaresIndexes?.includes(idx)}
            />
        );
    });

    return <div className={styles.board}>{jsxCells}</div>;
};
