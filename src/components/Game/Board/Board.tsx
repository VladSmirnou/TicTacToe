import { CellValue } from '../Game';
import { Cell } from './Cell/Cell';

import styles from './Board.module.css';

type Cells = Array<CellValue>;

type Props = {
    cells: Cells;
    onChangeCellValue: (cellId: number) => void;
    winSquaresIndexes: Array<number> | null;
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
