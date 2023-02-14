import React, {FC, MouseEventHandler} from 'react';

import {WithChildren} from '../../../types/with-children';

import styles from './button.module.css';

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary'
}

export interface ButtonProps {
    variant?: ButtonVariant
    reserved?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
    className?: string
}
export const Button: FC<ButtonProps & WithChildren> = (
    {
        variant = ButtonVariant.primary,
        children,
        onClick,
        className= '',
        reserved= false
    }) => (
        <button
            disabled={reserved}
            onClick={onClick}
            className={`
                ${className}
                ${styles.button}
                ${variant === ButtonVariant.primary ? styles.primary : styles.secondary}
            `}
            type='button'
        >
            {!reserved ? 'Забронировать' : 'Забронирована'}
            {children}
        </button>
    );
