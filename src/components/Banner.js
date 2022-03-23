import React from 'react';
import styled from 'styled-components';
import Paragraph from '../styled/Paragraph';

const Wrapper = styled.section`
    text-align:center;
    display:flex;
    flex-direction:column;
    margin:0 2%;
    @media(min-width:992px){
        margin:0 5%;
    }
    .top-text{
        margin-bottom:20px;
        p{
            font-size:25px;
        }
    }
    h1{
        margin-bottom:20px;
        color:${props => props.theme.color.red};
        font-family:${props => props.theme.fam.semibold};
        font-size:40px;
    }
    .img{
        background-image:url("./images/${props => props.bgImage}");
        background-size:cover;
        background-position:center center;
        width:100%;
        height:80vh;
    }
    
`

function Banner({title, text, bgImage}) {
  return (
    <Wrapper bgImage={bgImage}>
        <div className="top-text">
            <h1>{title}</h1>
            <Paragraph>{text}</Paragraph>
        </div>
        <div className="img" >
        </div>
    </Wrapper>
  )
}

export default Banner