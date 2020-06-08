import React, { useEffect, useContext, useState } from 'react';
import './fadeIn.css';
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
//@ts-ignore
import code from 'images/code.svg';
import { getLocalTheme } from 'utils';
import { ThemeContext } from 'contexts';
import initialLoad from 'utils/initialLoad';


interface FadeInProps {}

export const FadeIn: React.FC<FadeInProps> = () => {

  const { setTheme, theme } = useContext(ThemeContext);
  const [isInitialLoad, initialLoadComplete] = initialLoad()
  const [loaded, setLoaded] = useState(isInitialLoad);

  useEffect(() => {
    if(isInitialLoad){

    }
  }, [])


  useEffect(() => {
    setTheme(getLocalTheme());
    setLoaded(!loaded);
  }, [])

  return(
    <div className={loaded ? 'loading loaded' : 'loading'}>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      </div> */}
      <img src={code}/>
    </div>
  );
}