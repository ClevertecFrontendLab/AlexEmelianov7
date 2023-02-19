import React, {FC} from 'react';

import closeIcon from '../../../assets/icons/close.svg';
import warningCircle from '../../../assets/icons/warning-circle.svg';

import styles from './error.module.css';

interface ErrorProps {
    message: string
    onClose: () => void
}

export const Error: FC<ErrorProps> = ({message, onClose}) => (
        <div className={styles.error} data-test-id='error'>
            <div className={styles.content}>
                <img src={warningCircle} alt="warning"/>
                <p>{message}</p>
            </div>
            <button
                className={styles.closeBtn}
                type='button'
                onClick={onClose}
            >
                <img src={closeIcon} alt="close"/>
            </button>
        </div>
    );
