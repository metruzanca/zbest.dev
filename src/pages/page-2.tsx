import React from "react"
import { Link } from "gatsby"

import { SEO } from "components"
import { ArticleLayout } from "layouts"

const SecondPage:React.FC = () => (
  <ArticleLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </ArticleLayout>
)

export default SecondPage;