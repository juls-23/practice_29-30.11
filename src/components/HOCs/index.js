import React from "react";
import { ThemeContext, UserContext, LangContext } from "../../context"

export const WithTheme = InnerComponent => (props) => 
 <ThemeContext.Consumer>
  {([theme, setTheme]) => <InnerComponent  theme={theme} setTheme={setTheme}/>}
 </ThemeContext.Consumer>


export const WithUser = InnerComponent => (props) =>
  <UserContext.Consumer>{
    (user) => (<InnerComponent user={user} {...props} />)
  }</UserContext.Consumer>

export const WithLang = InnerComponent => (props) =>
  <LangContext.Consumer>
    {([currentLang, setLang]) => (<InnerComponent currentLang={currentLang} setLang={setLang} {...props} />)}
  </LangContext.Consumer>


