import React from 'react';
import cx from  'classnames';
import ParentWithLang from './Parent';
import styles from './Tree.module.scss'
import CONSTANTS from '../../constants';
import CONTENT from './content';
import { WithTheme, WithLang } from '../HOCs';
const {THEMES} = CONSTANTS

const Tree = (props) => {
  const {theme,  currentLang} = props;
  const classNames = cx(styles.container, {
    [styles.light]: theme ===THEMES.LIGHT,
    [styles.dark]: theme ===THEMES.DARK,
  });
   
 return (
    <div className={classNames}>
      <h2>{CONTENT[currentLang].TREE}</h2>
      <ParentWithLang />
    </div>)  
}



const TreeWithLang = WithLang(Tree)
const TreeWithTheme = WithTheme(TreeWithLang)


export default TreeWithTheme;
 