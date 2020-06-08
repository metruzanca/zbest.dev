export type Theme = {
  themeName:string;
  bgPrimary:string;
  fgPrimary:string;
  bgHeader:string;
  fgHighlight:string;
  fgLink:string;
  fgLinkVisited:string;
}

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
  const savedTheme = localStorage().getItem('theme');
  switch (savedTheme) {
    default:
    case "dark": return Themes.dark;
    case "light": return Themes.light;
  }
}

export function setLocalTheme(theme:Theme){
  localStorage().setItem('theme', theme.themeName);

}

function localStorage(){
  if(typeof window !== 'undefined'){
    return window.localStorage;
  }
  // To satisfy the gatsby compilation step
  return {
    getItem:(key: string)=>'dark',
    setItem:(key: string, value: string)=>{}
  }
}