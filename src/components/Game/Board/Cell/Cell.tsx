import { Button } from '@/components/Button/Button';

import cn from 'classnames';
import styles from './Cell.module.css';
import type { CellProps } from './types';

export const Cell = ({
    cellValue,
    onChangeCellValue,
    cellId,
    winCell,
}: CellProps) => {
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
