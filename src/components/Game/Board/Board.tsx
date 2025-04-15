import { Cell } from './Cell/Cell';

import styles from './Board.module.css';
import type { Nullable } from '@/shared/types/types';
import type { CellValue } from '../types';

type Cells = Array<CellValue>;

type Props = {
    cells: Cells;
    onChangeCellValue: (cellId: number) => void;
    winSquaresIndexes: Nullable<Array<number>>;
};

export const Board = ({
    cells,
    winSquaresIndexes,
    onChangeCellValue,
}: Props) => {
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
