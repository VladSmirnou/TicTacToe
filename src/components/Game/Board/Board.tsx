import { CellValue } from '../Game';
import { Cell } from './Cell/Cell';

type Cells = Array<CellValue>;

type Props = {
    cells: Cells;
    onChangeCellValue: (cellId: number) => void;
};

export const Board = ({ cells, onChangeCellValue }: Props) => {
    const jsxCells = cells.map((cell, idx) => {
        return (
            <Cell
                key={idx}
                cellId={idx}
                cellValue={cell}
                onChangeCellValue={onChangeCellValue}
            />
        );
    });
    const s = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 50px)',
        gridTemplateRows: 'repeat(3, 50px)',
    };
    return <div style={s}>{jsxCells}</div>;
};
