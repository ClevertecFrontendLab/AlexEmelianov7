import React, { FC } from 'react';

import { WithChildren } from '../../../types/with-children';

import styles from './modal-wrapper.module.css';

interface ModalWrapperProps {
    dataTestId?: string
}

export const ModalWrapper: FC<ModalWrapperProps & WithChildren> = (
    {
        dataTestId,
        children
    }) => (
        <div className={styles.authWrapper} data-test-id='auth'>
            <h1 className={styles.title}>Cleverland</h1>
            <div
                className={styles.modalWrapper}
                data-test-id={dataTestId}
            >
                {children}
            </div>
        </div>
    );
