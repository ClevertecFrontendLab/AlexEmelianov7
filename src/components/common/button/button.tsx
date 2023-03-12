import React, {FC} from 'react';

import {WithClassname} from '../../../types/with-classname';

import styles from './button.module.css';

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary'
}

export enum ButtonType {
    button = 'button',
    submit = 'submit'
}

export interface ButtonProps {
    name: string
    type?: ButtonType
    variant?: ButtonVariant
    disabled?: boolean
    onClick?: () => void
}
export const Button: FC<ButtonProps & WithClassname> = (
    {
        name= '',
        variant = ButtonVariant.primary,
        type= ButtonType.button,
        onClick,
        className= '',
        disabled= false
    }) => (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`
                ${className}
                ${styles.button}
                ${variant === ButtonVariant.primary ? styles.primary : styles.secondary}
            `}
            type={type === ButtonType.button ? 'button' : 'submit'}
        >
            {name}
        </button>
    );
