import React, { Component } from 'react';
import cx from  'classnames';
import { WbSunny, NightsStay } from '@material-ui/icons';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { WithTheme, WithUser } from '../HOCs';
const {THEMES} = CONSTANTS;

const Header = (props) => {
  const {theme, setTheme, user} = props;
  const isLightTheme = theme ===THEMES.LIGHT;
  const classNames = cx(styles.container, {
    [styles.light]: isLightTheme,
    [styles.dark]: theme ===THEMES.DARK,
  }); 
  return ( 
    <header className={classNames}>
    <p>{user.fname} {user.sname} </p>
    <div onClick={() => {
      const nextTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
      setTheme(nextTheme);
    }}>
      {isLightTheme ? <WbSunny /> : <NightsStay />}
    </div>
  </header>
  )
  
}


const HeaderWithTheme = WithTheme(WithUser(Header));


export default HeaderWithTheme;


