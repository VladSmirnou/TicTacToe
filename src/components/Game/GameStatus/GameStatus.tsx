import styles from './GameStatus.module.css';
import type { GameStatusProps } from './types';

export const GameStatus = ({ status }: GameStatusProps) => {
    return <span className={styles.game_status}>{status}</span>;
};
