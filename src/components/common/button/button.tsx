import React, {FC, MouseEventHandler} from 'react';

import {WithChildren} from '../../../types/with-children';

import styles from './button.module.css';
import {WithClassname} from "../../../types/with-classname";

export enum ButtonVariant {
    primary = 'primary',
    secondary = 'secondary'
}

export interface ButtonProps {
    name: string
    variant?: ButtonVariant
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}
export const Button: FC<ButtonProps & WithClassname> = (
    {
        name= '',
        variant = ButtonVariant.primary,
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
            type='button'
        >
            {name}
        </button>
    );
