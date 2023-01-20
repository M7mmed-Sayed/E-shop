import React from 'react'
import styled from 'styled-components'
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from '@mui/icons-material'

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 3;
    align-items: center;
    display: flex;
    justify-content: center;
    transition:all 0.5s ease;
`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info} {
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Image = styled.img`
    height: 80%;
    object-fit: cover;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 12px;
    cursor: pointer;
    transition: all 0.4s ease;
    &:hover {
        transform: scale(1.2);
        background-color: #e0f8f7;
    }
`
const Product = ({ item }) => {
    return (
        <Container>
            <Circle>
                <Image src={item.img} />
            </Circle>
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
