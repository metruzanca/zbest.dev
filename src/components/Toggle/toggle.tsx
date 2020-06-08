import React, { useState, useEffect } from 'react';

import styled from "@emotion/styled";
import { getLocalTheme } from 'utils';

interface ToggleProps{
  onClick:(state:boolean)=>void;
  colors?:{
    toggleOff:string;
    toggleOn:string;
  },
  toggled:boolean;
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;



const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:focus  {
    box-shadow: 0 0 1px #2196F3;
  }
`;

const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .2s;
    transition: .2s;
    border-radius: 50%;
  }
`;


//TODO
// const slider = styled(StyledSpan)`
//   ${checked => ``}
// `;

function debugTime(){
  const t = new Date();
  return `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()} => `;
}

//REFACTOR
export const Toggle : React.FC<ToggleProps> = ({
  onClick,
  colors = {
    toggleOff: "#FF002A",
    toggleOn: "#1BF0FE",
  },
  toggled
}) => {
  
  const [checked, setChecked] = useState(toggled)
  
  const handleClick = () => {
    setChecked(!checked);
    onClick(!checked);
  }  

  useEffect(() => {
    setChecked(toggled);
  }, [toggled])

  function getStyle(checked:boolean){
    return checked ? {
      '&:before':{
        transform:"translateX(26px)",
      },
      backgroundColor: colors.toggleOn,
    } : {
      backgroundColor: colors.toggleOff
    }
  }
  
  console.log(debugTime() + checked)
  console.log(getStyle(checked));
  
  return(
    <Wrapper>
      <StyledInput checked={checked} type="checkbox"/>
      <StyledSpan onClick={handleClick} css={getStyle(checked)}/>
    </Wrapper>
  )
}