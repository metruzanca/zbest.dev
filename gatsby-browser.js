import React from "react"

import { ThemeProvider } from "./src/contexts";
// import { FadeIn } from "components/FadeIn"

//TODO FadeIn on initial load is causing a white screen only on built version.
// Probably a side effect of optimizations done by gatsby.
// So I need to find a different way to implement that.

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    {/* <FadeIn/> */}
    {element}
  </ThemeProvider>
)