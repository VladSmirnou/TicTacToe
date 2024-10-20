type Props = {
    status: string;
};

export const GameStatus = ({ status }: Props) => {
    const g = {
        gridColumn: '1 / 3',
        marginBottom: '10px',
    };
    return <span style={g}>{status}</span>;
};
