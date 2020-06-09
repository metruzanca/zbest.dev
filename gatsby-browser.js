import React from "react"

import { ThemeProvider } from "./src/contexts";
import { FadeIn } from "components/FadeIn"


export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {/* <FadeIn/> */}
    {element}
  </ThemeProvider>
)