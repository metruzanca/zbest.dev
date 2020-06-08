import React, { useContext } from "react"
import { Link } from "gatsby"
import { Toggle } from 'components';
import { Themes } from "utils";
import { ThemeContext } from "contexts";

interface HeaderProps{
  siteTitle?: string;
}

export const Header:React.FC<HeaderProps> = ({ siteTitle }) => {

  const {theme, setTheme} = useContext(ThemeContext)
  
  const handleClick = (state:boolean) => {
    setTheme(state ? Themes.dark : Themes.light)
  }

  return (
    <header
      style={{
        background: theme.bgHeader, 
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
          display:'flex',
          flexDirection:'row'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `#F6DF4C`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div style={{position:'absolute', right:0, marginRight:30}}>
          <Toggle toggled={theme.themeName == "dark" ? true : false} onClick={handleClick} colors={{toggleOff:"#feac73", toggleOn:"#8d77ff"}}/>
          <span style={{color:'white'}}> Theme WIP</span>
        </div>
      </div>
    </header>
  );
}