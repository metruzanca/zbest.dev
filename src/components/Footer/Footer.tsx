import React, {} from 'react';

interface FooterProps {}

export const Footer:React.FC<FooterProps> = ({}) => {
  return(
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}