import { CellValue } from '@/components/Game/Game';
import { Button } from '@/components/Button/Button';

import cn from 'classnames';
import styles from './Cell.module.css';

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
    const handleOnChangeCellValue = () => {
        onChangeCellValue(cellId);
    };

    const finalClass = cn(styles.cell, {
        [styles.win_cell]: winCell,
        [styles.left_border]: cellId % 3 !== 0,
        [styles.top_border]: cellId > 2,
    });

    return (
        <Button onClick={handleOnChangeCellValue} className={finalClass}>
            {cellValue}
        </Button>
    );
};
