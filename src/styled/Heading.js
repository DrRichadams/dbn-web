import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h3`
    font-family:${props => props.theme.fam.semibold};
    color:${props => props.theme.color.red};
    margin-bottom:30px;
    font-size:35px;
`

function Heading({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Heading