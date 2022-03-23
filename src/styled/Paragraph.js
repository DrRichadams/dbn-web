import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-size:15px;
    font-family:${props => props.theme.fam.regular};
    line-height:1.3;
    @media(min-width:768px){
      font-size:18px;
    }
`

function Paragraph({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Paragraph