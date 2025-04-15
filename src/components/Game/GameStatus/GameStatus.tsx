import type { ReactNode } from 'react';
import styles from './GameStatus.module.css';

type Props = {
    status: ReactNode;
};

export const GameStatus = ({ status }: Props) => {
    return <span className={styles.game_status}>{status}</span>;
};
