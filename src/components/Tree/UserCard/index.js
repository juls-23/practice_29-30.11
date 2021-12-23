import React from 'react';
import styles from './UserCard.module.scss'
import { WithLang, WithUser } from '../../HOCs';
import CONTENT from '../content'


const UserCard = (props) =>{
  const {user, currentLang} = props;  
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>{CONTENT[currentLang].USERCARD}</h2>
        <p>{user.fname} {user.sname}</p>
        <img src={user.imgSrc} className={styles.img} />
      </div>
    
    );
}

const UserCardWithUser = WithLang(WithUser(UserCard))

// const UserCardWithTheme = WithTheme(UserCardWithUser)

export default UserCardWithUser;