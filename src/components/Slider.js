import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'

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
    margin-left: 70px;
`
const Image = styled.img`
    height: 80%;
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
    font-size: 20px;
    font-weight: 550;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 15px;
    font-size: 25px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10%;
    box-shadow: 7px 4px 0px 4px gray;
`
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)
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
                <Slide bg="fbf0f4">
                    <ImageContainer>
                        <Image src="https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/33/810723/1.jpg?4742" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Summer</Title>
                        <Discription> Dont loss the offer</Discription>
                        <Button>Show Now</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                    <ImageContainer>
                        <Image src="https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/33/810723/1.jpg?4742" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Winter</Title>
                        <Discription> Dont loss the offer</Discription>
                        <Button>Show Now</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                    <ImageContainer>
                        <Image src="https://eg.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/33/810723/1.jpg?4742" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Popular</Title>
                        <Discription> Dont loss the offer</Discription>
                        <Button>Show Now</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="Right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
