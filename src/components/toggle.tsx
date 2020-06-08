import React, { useState } from 'react';

import styled from "@emotion/styled";

interface ToggleProps{
  
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
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;

export const Toggle : React.FC<ToggleProps> = ({}) => {
  
  const [checked, setChecked] = useState(false)

  return(
    <Wrapper>
      <StyledInput checked={checked} type="checkbox"/>
      <StyledSpan onClick={() => setChecked(!checked)} css={checked ? {
        '&:before':{
          transform:"translateX(26px)",
        },
        backgroundColor: "#2196F3",
      } : null}/>
    </Wrapper>
  )
}