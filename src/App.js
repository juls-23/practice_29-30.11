import './App.css';
import React, { Component } from 'react';
import { UserContext, ThemeContext, LangContext } from './context'
import CONSTANTS from './constants';
import TreeWithTheme from './components/Tree';
import HeaderWithTheme from './components/Header';
import FooterWithTheme from './components/Footer';
const {THEMES} = CONSTANTS


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      theme:THEMES.LIGHT,
      currentLang: 'EN',
      user:{
        id:1,
        fname:'Elon',
        sname:'Musk',
        imgSrc:'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg'
      }
    }
  }
  
  setTheme = (theme) => {this.setState({theme})}
  setLang = (currentLang) => {this.setState({currentLang})}


 render(){
   const {user, theme, currentLang} = this.state;
   return <ThemeContext.Provider value={[theme, this.setTheme]}>
       <LangContext.Provider value={[currentLang, this.setLang]}>
        <UserContext.Provider value={user}>
          <HeaderWithTheme />
          <TreeWithTheme />
          <FooterWithTheme />
        </UserContext.Provider>
        </LangContext.Provider>
      </ThemeContext.Provider>
 }
}


export default App;


