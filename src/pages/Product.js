import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    font-weight: 250;
`
const Description = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 50px;
`
const FilterContainer = styled.div`
    display: flex;
    width: 50%;
    margin: 30px 0px;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    display: flex;
    align-items: center;
`
const FilterText = styled.span`
    font-size: 20px;
    margin-right: 10px;
    font-weight: 250;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    margin: 0px 5px;
    cursor: pointer;
    border-radius: 50%;
    background-color: ${(props) => props.bg};
`
const FilterSize = styled.select`
    padding: 5px;
    margin-left: 10px;
`
const SizeOption = styled.option``
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 750;
`
const Amount = styled.span`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
`
const Button = styled.button`
    padding: 15px;
    font-weight: 700;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: lightgrey;
        transform: scale(1.2);
        transition: all 0.2s ease;
    }
`
const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://cdn.pixabay.com/photo/2013/07/13/10/41/hat-157581_960_720.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Suit</Title>
                    <Description>
                        it is perfct Suit at 2023 , it was maked in Spain{' '}
                    </Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterText> Color </FilterText>
                            <FilterColor bg="black"> </FilterColor>
                            <FilterColor bg="pink"> </FilterColor>
                            <FilterColor bg="Gray"> </FilterColor>
                            <FilterColor bg="teal"> </FilterColor>
                        </Filter>
                        <Filter>
                            <FilterText> Size </FilterText>

                            <FilterSize>
                                <SizeOption>S</SizeOption>
                                <SizeOption>M</SizeOption>
                                <SizeOption>X</SizeOption>
                                <SizeOption>XL</SizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount> <Add />
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product
