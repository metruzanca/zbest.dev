/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import { Header, BorderOverlay, Footer } from 'components'
// import "./layout.css"
import { ThemeContext } from "contexts"
import { Themes } from "utils"


import styled from '@emotion/styled';

const Body = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
`;

export const BaseLayout: React.FC = ({ children }) => {

  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const { dark } = useContext(ThemeContext)

  const theme = dark ? Themes.dark : Themes.light

  return (
    <>
      <Global styles={css`
        body{
          background-color: ${theme.bgPrimary};
          color: ${theme.fgPrimary};
        }
      `} />
      {/* <BorderOverlay /> */}
      {children}
      {/* <Header siteTitle={data.site.siteMetadata.title} />
      <Body>
        <main>{children}</main>
        <Footer />
      </Body> */}
    </>
  )
}