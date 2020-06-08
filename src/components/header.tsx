import React from "react"
import { Link } from "gatsby"
import { Toggle } from 'components';

interface HeaderProps{
  siteTitle?: string;
}

export const Header:React.FC<HeaderProps> = ({ siteTitle }) => (
  <header
    style={{
      background: `#342f52`, 
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
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
    </div>
    {/* <Toggle/> */}
  </header>
)

