/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import { Header } from 'components'
import "./layout.css"
import { ThemeContext } from "contexts"
import { getLocalTheme, Theme, setLocalTheme, Themes } from "utils"
import { FadeIn } from "components/FadeIn"
import initialLoad from "utils/initialLoad"

export const Layout:React.FC = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [theme, _setTheme] = useState(Themes.dark)
  const [loaded, setLoaded] = initialLoad();

  // useEffect(() => {
  //   if()
  //   _setTheme(getLocalTheme());
  // }, [])

  const setTheme = (theme:Theme) => {
    _setTheme(theme);
    setLocalTheme(theme);
  }


  return (
    <ThemeContext.Provider value={{theme, setTheme, loaded, setLoaded}}>
      
      <FadeIn/>
      <Global styles={css`
        body{
          background-color: ${theme.bgPrimary};
          color: ${theme.fgPrimary};
        }
      `}/>

      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
      }}>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}