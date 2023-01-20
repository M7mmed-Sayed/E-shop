import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import { slidItems } from '../data'
import '../CSS/test.css'
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    background-color: white;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${(props) => props.direction === 'Left' && '10px'};
    right: ${(props) => props.direction === 'Right' && '10px'};
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 2s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    background-color: #${(props) => props.bg};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    margin: 4%;
`
const Image = styled.img`
    height: 80%;
    margin: 30px;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Discription = styled.p`
    margin: 50px 0px;
    font-size: 25px;
    font-weight: 550;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 15px;
    font-size: 25px;
    min-width: 300px;
    min-height: 60px;
    font-family: 'Nunito', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1.3px;
    font-weight: 700;
    background: linear-gradient(
        90deg,
        rgb(216, 143, 178) 0%,
        rgb(94, 79, 209) 100%
    );
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgba(15, 51, 47, 0.64);
    transition: all 0.2s ease-in-out 0s;
    cursor: pointer;
    padding: 10px;
   
    &::before {
        
        border-radius: 500px;
        min-width: calc(300px + 12px);
        min-height: calc(60px + 12px);
        border: 4px solid #c27ae6;
        box-shadow: 0 0 0px rgba(19, 22, 200, 0.64);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
    }
    &:hover,
    :focus {
        color: #313133;
        transform: translateY(-20px);
    }
    

`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        console.log(slideIndex)
        if (direction === 'left') setSlideIndex((slideIndex - 1 + 3) % 3)
        else setSlideIndex((slideIndex + 1 + 3) % 3)
    }
    return (
        <Container>
            <Arrow direction="Left" onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {slidItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Discription> {item.discription}</Discription>
                            <Button>Show Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="Right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
