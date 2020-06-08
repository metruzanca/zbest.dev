import React, {  } from 'react';
import './fadeIn.css';
// import Img from "gatsby-image"
// import { useStaticQuery, graphql } from "gatsby"
//@ts-ignore
import code from 'images/code.svg';


interface FadeInProps {
  loaded:boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  loaded
}) => {

  // const data = useStaticQuery(graphql`
  //   query {
  //     placeholderImage: file(relativePath: { eq: "Code.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

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