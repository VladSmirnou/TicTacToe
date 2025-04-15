import type { CellValue } from '../../types';

export type CellProps = {
    cellValue: CellValue;
    onChangeCellValue: (cellId: number) => void;
    cellId: number;
    winCell: boolean;
};
