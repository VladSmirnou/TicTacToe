import { Button } from '@/components/Button/Button';

import cn from 'classnames';
import styles from './HistorySlot.module.css';
import type { HistorySlotProps } from './types';

export const HistorySlot = ({
    turn,
    currentHistoryTurn,
    onRestoreBoard,
    cellCoordinates,
}: HistorySlotProps) => {
    const handleResotreBoard = () => {
        onRestoreBoard(turn);
    };

    const [row, column] = cellCoordinates;

    const coordinatesString = `[row: ${row}, column: ${column}]`;

    const isFirstTurn = turn === 0;

    const buttonText = isFirstTurn ? (
        'Go to game start'
    ) : (
        <>
            <span>Go to move #{turn};&nbsp;</span>
            <span>{coordinatesString}</span>
        </>
    );
    return (
        <li className={styles.history_slot}>
            {currentHistoryTurn === turn ? (
                <div className={styles.selected_slot}>
                    <span>
                        -&gt; You are at move&nbsp;
                        <span className={styles.selected_turn}>
                            #{currentHistoryTurn}
                        </span>
                        ;&nbsp;
                    </span>
                    <span>
                        {currentHistoryTurn !== 0 ? coordinatesString : ''}
                    </span>
                </div>
            ) : (
                <Button
                    className={cn(styles.history_slot_button, {
                        [styles.go_to_game_start_button]: isFirstTurn,
                    })}
                    onClick={handleResotreBoard}
                >
                    {buttonText}
                </Button>
            )}
        </li>
    );
};
