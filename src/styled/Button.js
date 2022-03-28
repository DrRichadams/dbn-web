import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    height:40px;
    padding:0 20px;
    background:${props => props.bg};
    border-radius:26px;
    border:none;
    font-family:${props => props.theme.fam.semibold};
    
`

function Button({children, bg}) {
  return (
    <Wrapper bg={bg}>{children}</Wrapper>
  )
}

export default Button