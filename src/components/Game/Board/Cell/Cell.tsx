import { CellValue } from '@/components/Game/Game';

type Props = {
    cellValue: CellValue;
    onChangeCellValue: (cellId: number) => void;
    cellId: number;
};

export const Cell = ({ cellValue, onChangeCellValue, cellId }: Props) => {
    const handleOnChangeCellValue = () => {
        onChangeCellValue(cellId);
    };

    return <button onClick={handleOnChangeCellValue}>{cellValue}</button>;
};
