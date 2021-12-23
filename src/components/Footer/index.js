import React, { Component } from 'react';
import cx from  'classnames';
import { WithLang, WithTheme } from '../HOCs';
import styles from './Footer.module.scss';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;


const Footer = (props) => {
  const {setLang, theme} = props;
 
  const classNames = cx(styles.container, {
    [styles.light]: theme ===THEMES.LIGHT,
    [styles.dark]: theme ===THEMES.DARK,
  });


  const hanleChange = (event)=>setLang(event.target.value)
  
  return (
   <footer className={classNames}>
    <select onChange={hanleChange} >
     <option value='EN'>EN</option>
     <option  value='RU'>RU</option> 
   </select>
    </footer>
  )
}



const FooterWithLang = WithLang(Footer)
const FooterWithTheme = WithTheme(FooterWithLang)

export default FooterWithTheme;
