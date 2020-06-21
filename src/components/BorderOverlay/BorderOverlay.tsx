import React, {} from 'react';
import styled from '@emotion/styled'
import { Themes } from 'utils';


const Top = styled.div<Pick<BorderOverlayProps, 'upperColor'>>`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  max-width: 100%;
  height: 4px;
  box-sizing: border-box;
  background-color: ${({ upperColor }) => upperColor};
  pointer-events: none;
`;

const Sides = styled.div<BorderOverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  box-sizing: border-box;
  border-width: 4px;
  border-style: solid;
  -o-border-image: linear-gradient(to bottom, ${({ upperColor: u, lowerColor: l }) => u + ',' + l}) 1 100%;
  border-image: linear-gradient(to bottom, ${({ upperColor: u, lowerColor: l }) => u + ',' + l}) 1 100%;
  pointer-events: none;
`;

const Bottom = styled.div<Pick<BorderOverlayProps, 'lowerColor'>>`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  width: 100vw;
  max-width: 100%;
  height: 4px;
  background-color: ${({ lowerColor }) => lowerColor};;
`;

interface BorderOverlayProps {
  upperColor?:string;
  lowerColor?:string;
}

export const BorderOverlay:React.FC<BorderOverlayProps> = ({
  upperColor = Themes.dark.fgHighlight,
  lowerColor = "#ff7f00",
}) => {
  
  return(
    <>
      <Top upperColor={upperColor}/>
      <Sides upperColor={upperColor} lowerColor={lowerColor}/>
      <Bottom lowerColor={lowerColor}/>
    </>
  )
}