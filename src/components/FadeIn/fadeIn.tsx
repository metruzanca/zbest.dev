import React, { useEffect, useContext, useState } from 'react';
import './fadeIn.css';
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
import code from 'images/code.svg';
import { ThemeContext } from 'contexts';


interface FadeInProps {}

export const FadeIn: React.FC<FadeInProps> = () => {

  const { toggleDark, dark, isLoading } = useContext(ThemeContext);

  return (true ? (
    <div className="loading">
      <img src={code}/>
    </div>
  ) : null
  );
}