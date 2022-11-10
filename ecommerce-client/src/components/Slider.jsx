import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from "react";
import { sliderItems } from '../data';
import { Mobile } from '../responsive'; 


const Container = styled.div`
    width:100%;
    height:calc(100vh - 100px);
    display:flex;
    position:relative;
    overflow:hidden;
    ${Mobile({ display : 'none'})};
`;

const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color:rgba(224, 224, 224,0.5);
    border-radius:50%;
    align-items:center;
    display:flex;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor:pointer;
    z-index:2;

    &:hover {
        background-color:rgba(224, 224, 224,1);
    }

`;

const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height:calc(100vh - 100px);
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height:100%;
    flex:1;
`;

const Image = styled.img`

`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: #ccc;
    cursor: pointer;
    border:none;
`;

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleSlide = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }

    return (
        <Container>

            <Arrow direction='left' onClick={()=>handleSlide('left')}>
                <ArrowBackIosNewOutlinedIcon />
            </Arrow>    

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => ( 
               
                <Slide key={item.id}>
                    <ImgContainer>
                        <Image style={{height: '100%' , width: '100%', objectFit:'cover'}} src={item.img} alt=""></Image>
                    </ImgContainer>
                    
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>                     
                </Slide>
                 ))}
            </Wrapper>
            
            <Arrow direction='right' onClick={()=>handleSlide('right')}>
                <ArrowForwardIosOutlinedIcon/>
            </Arrow>

        </Container>
    )
}