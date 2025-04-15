import type { Nullable } from '@/shared/types/types';
import type { CellValue } from '../types';

export type Cells = Array<CellValue>;

export type BoardProps = {
    cells: Cells;
    onChangeCellValue: (cellId: number) => void;
    winSquaresIndexes: Nullable<Array<number>>;
};
