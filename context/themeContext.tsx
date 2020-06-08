import React from 'react';

type Theme = {
  bgPrimary:string;
  fgPrimary:string;
  bgHeader:string;
  fgHighlight:string;
  fgLink:string;
  fgLinkVisited:string;
}

const themes: { [key: string]: Partial<Theme>} = {
  "dark":{
    bgPrimary:"#211e31",
    bgHeader:"#342f52",
    fgPrimary:"white",
    fgHighlight:"#f6df4c",
    fgLink:"#6883fd",
    fgLinkVisited:"#8D77FFs",
  },
  "light":{
    bgPrimary: "#d4ccff",
    bgHeader: "#342f52",
    fgPrimary: "black",
    fgHighlight: "#f6df4c",
    fgLink: "#6883fd",
    fgLinkVisited: "#8D77FFs",
  }
}

export const ThemeContext = React.createContext(themes);