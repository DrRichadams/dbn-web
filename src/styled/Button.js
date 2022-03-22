import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    height:40px;
    padding:0 10px;
    background:${props => props.bg};
`

function Button({children, bg}) {
  return (
    <Wrapper bg={bg}>{children}</Wrapper>
  )
}

export default Button