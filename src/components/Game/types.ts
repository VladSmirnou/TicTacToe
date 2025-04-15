import type { Nullable } from '@/shared/types/types';

export type CellValue = Nullable<'X' | 'O'>;

export type Coordinates = {
    [key: string]: Array<number>;
};

export type Turn = number;
export type ShowHistory = boolean;

export type BoardStatus = Array<Array<CellValue>>;
