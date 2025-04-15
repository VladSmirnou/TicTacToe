import type { BoardStatus } from '../types';

export const getInitialStateData = () => {
    return {
        initialTurn: 0,
        initialBoardStatus: [Array.from({ length: 9 })] as BoardStatus,
        initialShowHistory: false,
    };
};
