export type Theme = {
  themeName:string;
  bgPrimary:string;
  fgPrimary:string;
  bgHeader:string;
  fgHighlight:string;
  fgLink:string;
  fgLinkVisited:string;
}

/**
 * orange dark: #FD9B6E
 * orange light: #FEC171
 * purple: #5F56E5
 */

const darkTheme:Theme = {
  themeName:"dark",
  bgPrimary:"#211e31",
  bgHeader:"#342f52",
  fgPrimary:"white",
  fgHighlight:"#f6df4c",
  fgLink:"#6883fd",
  fgLinkVisited:"#8D77FFs",
}

const lightTheme:Theme = {
  themeName:"light",
  bgPrimary: "white",
  bgHeader: "#342f52",
  fgPrimary: "black",
  fgHighlight: "#f6df4c",
  fgLink: "#6883fd",
  fgLinkVisited: "#8D77FFs",
}

export const Themes = {
  dark:darkTheme,
  light:lightTheme
}

export function getLocalTheme(){
  // if(typeof window !== 'undefined'){
  //   const savedTheme = window.localStorage.getItem('theme');
    switch (window.localStorage.getItem('theme')) {
      default:
      case "dark": return Themes.dark;
      case "light": return Themes.light;
    }
  // }
}

export function setLocalTheme(theme:Theme){
  if(typeof window !== 'undefined'){
    window.localStorage.setItem('theme', theme.themeName);
  }
}