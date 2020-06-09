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
import { getLocalTheme, Theme, setLocalTheme, Themes, themeLoaded } from "utils"
import { FadeIn } from "components/FadeIn"

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

  useEffect(() => {
    console.log(`Changed theme to ${theme.themeName}`)
  }, [theme])

  const setTheme = (theme:Theme) => {
    _setTheme(theme);
    setLocalTheme(theme);
    themeLoaded();
    console.group("ThemeProvider");
    console.trace();
    console.groupEnd();
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
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