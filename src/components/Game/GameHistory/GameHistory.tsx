import { useState } from 'react';
import { HistorySlot } from './HistorySlot/HistorySlot';
import { Button } from '@/components/Button/Button';

import styles from './GameHistory.module.css';
import type { GameHistoryProps, SortDirection } from './types';

export const GameHistory = ({
    turn,
    currentHistoryTurn,
    onRestoreBoard,
    turnCellCoordinatesMap,
}: GameHistoryProps) => {
    const [sortDirection, setSortDirection] =
        useState<SortDirection>('ascending');

    const handleSetSordDirection = () => {
        setSortDirection((prev) =>
            prev === 'ascending' ? 'descending' : 'ascending',
        );
    };

    const historySlots = [];
    for (let historyTurn = 0; historyTurn <= turn; historyTurn++) {
        const finalHistoryTurn =
            sortDirection === 'ascending'
                ? historyTurn
                : Math.abs(historyTurn - turn);
        historySlots.push(
            <HistorySlot
                key={finalHistoryTurn}
                turn={finalHistoryTurn}
                currentHistoryTurn={currentHistoryTurn}
                onRestoreBoard={onRestoreBoard}
                cellCoordinates={turnCellCoordinatesMap[finalHistoryTurn]}
            />,
        );
    }

    return (
        <div className={styles.history}>
            <Button
                className={styles.sort_button}
                onClick={handleSetSordDirection}
            >
                sort in{' '}
                {sortDirection === 'ascending' ? 'descending' : 'ascending'}{' '}
                order
            </Button>
            <ul className={styles.history_stack}>{historySlots}</ul>
        </div>
    );
};
