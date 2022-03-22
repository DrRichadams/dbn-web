import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    
`

function Paragraph({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Paragraph