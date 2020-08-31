import React, { useState } from "react"
import { Link } from "gatsby"

import { Image, SEO, Hero } from "components"
import { ArticleLayout } from "layouts"

const IndexPage: React.FC = ({

}) => {



  return (
    <ArticleLayout>
      <SEO title="Home" />
      <h1>Hello, I'm Samuele Zanca</h1>
      <p>Web portfolio coming soon</p>
      <p>
        For my components <a href="https://components.zbest.dev/">Click Here</a>
      </p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </ArticleLayout>
  )
}

export default IndexPage