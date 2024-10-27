import { CellValue } from '@/components/Game/Game';

type Props = {
    cellValue: CellValue;
    onChangeCellValue: (cellId: number) => void;
    cellId: number;
    winCell: boolean;
};

export const Cell = ({
    cellValue,
    onChangeCellValue,
    cellId,
    winCell,
}: Props) => {
    const winSquareStyles = {
        backgroundColor: 'lightgreen',
    };

    const handleOnChangeCellValue = () => {
        onChangeCellValue(cellId);
    };

    return (
        <button
            onClick={handleOnChangeCellValue}
            style={winCell ? winSquareStyles : {}}
        >
            {cellValue}
        </button>
    );
};
