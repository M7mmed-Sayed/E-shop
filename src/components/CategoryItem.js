import React from 'react'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'
const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    background-color: black;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({
        height: '50vh',
    })}
`
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    ${tablet({
        fontSize: '120%',
    })}
`
const Button = styled.button`
    width:200px;
    font-family: 'Nunito', sans-serif;
    font-size: 22px;
    letter-spacing: 1.3px;
    font-weight: 700;
    color: #313133;
    background: linear-gradient(
        90deg,
        rgb(216, 143, 178) 0%,
        rgb(94, 79, 209) 100%
    );
    border: none;
    border-radius: 1000px;
    box-shadow: 12px 12px 24px rgba(15, 51, 47, 0.64);
    cursor: pointer;
    padding: 10px;
    ${tablet({
        width: '40%',
            fontSize: '120%',

    })}
`
const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
