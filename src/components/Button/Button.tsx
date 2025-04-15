import type { ComponentProps } from 'react';

import cn from 'classnames';
import styles from './Button.module.css';

export const Button = (props: ComponentProps<'button'>) => {
    const { className, ...rest } = props;
    return <button className={cn(className, styles.button)} {...rest} />;
};
