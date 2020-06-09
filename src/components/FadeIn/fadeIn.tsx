import React, { useEffect, useContext, useState } from 'react';
import './fadeIn.css';
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
import code from 'images/code.svg';
import { getLocalTheme, didThemeLoad, themeLoaded } from 'utils';
import { ThemeContext } from 'contexts';


interface FadeInProps {}

export const FadeIn: React.FC<FadeInProps> = () => {

  const { setTheme, theme } = useContext(ThemeContext);

  useEffect(() => {
    setTimeout(()=>{
      if (!didThemeLoad()) {
        setTheme(getLocalTheme());
      }
    })
  }, [])

  return (didThemeLoad() ? null : (
    <div className="loading loaded">
      <img src={code}/>
    </div>
  )); 
}