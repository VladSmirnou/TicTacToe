import cn from 'classnames';
import styles from './Button.module.css';
import type { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
    const { className, ...rest } = props;
    return <button className={cn(className, styles.button)} {...rest} />;
};
