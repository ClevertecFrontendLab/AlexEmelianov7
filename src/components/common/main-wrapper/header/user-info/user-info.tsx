import React, {FC} from 'react';

import {UserAvatar} from './user-avatar/user-avatar';

import styles from './user-info.module.css';

interface UserInfoProps {
    userName: string
    avatarUrl: string
}

export const UserInfo: FC<UserInfoProps> = ({userName = '', avatarUrl = ''}) => (
        <div className={styles.userInfo}>
            <p className={styles.userGreeting}>{`Привет, ${userName}!`}</p>
            <UserAvatar userName={userName} avatarUrl={avatarUrl}/>
        </div>
    );
