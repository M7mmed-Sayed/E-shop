import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
import { mobile, tablet } from '../responsive'
const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    
`
const Title = styled.h1`
    text-transform: capitalize;
    font-weight: 350;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    padding: 25px;
    align-items: center;
    justify-content: space-between;
`
const TopButton = styled.button`
    text-transform: capitalize;
    padding: 10px;
    font-weight: 650;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    background-color: ${(props) =>
        props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white'};
`
const TextContainer = styled.div`
    ${mobile({
        display: 'none',
    })}
    ${tablet({
        display: 'none',
    })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`
const Buttom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
        flexDirection: 'column',
    })}
    ${tablet({
        flexDirection: 'column',
    })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    margin: 30px 2px;
    justify-content: space-between;
    ${mobile({
        flexDirection: 'column',
    })}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const ProductInfo = styled.div`
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
    padding: 10px;
`
const ProductId = styled.span`
    padding: 10px;
`
const ProductColor = styled.div`
    width: 25px;
    height: 25px;
    padding: 10px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`
const ProductSize = styled.span`
    padding: 10px;
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ProductAmount = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    
`
const Amount = styled.div`
    font-size: 30px;
    margin: 8px;
    ${mobile({
        margin: '5px 20px',
    })}
`
const ProductPrice = styled.div`
    font-size: 35px;
    font-weight: 330;
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 2px;
`
const Summary = styled.div`
    flex: 1;
    border: 1px solid lightblue;
    border-radius: 10px;
    padding: 20px;
    height: 50%;
  
`
const SummaryTitle = styled.h1`
    font-weight: 400;
`
const SummaryItem = styled.div`
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    color: white;
    font-weight:500;
    font-size:30px;
    background-color: black;
    cursor: pointer;
    padding: 5px;;
    box-shadow: 5px 5px 0px 0px saddlebrown;
`
const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>Your BAG</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TextContainer>
                        <TopText>Shopping Bag ( 2 )</TopText>
                        <TopText>Your WishList( 0 )</TopText>
                    </TextContainer>
                    <TopButton type="filled">Check out Now</TopButton>
                </Top>
                <Buttom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.pixabay.com/photo/2013/07/13/10/41/hat-157581_960_720.png" />
                                <ProductInfo>
                                    <ProductName>
                                        <b>Product :</b>Hat
                                    </ProductName>
                                    <ProductId>
                                        <b>ProductId :</b>8724526
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size :</b> 42
                                    </ProductSize>
                                </ProductInfo>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmount>
                                    <Add />
                                    <Amount>1</Amount>
                                    <Remove />
                                </ProductAmount>
                                <ProductPrice>$ 15</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://cdn.pixabay.com/photo/2013/07/13/10/41/hat-157581_960_720.png" />
                                <ProductInfo>
                                    <ProductName>
                                        <b>Product :</b>Hat
                                    </ProductName>
                                    <ProductId>
                                        <b>ProductId :</b>8724526
                                    </ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize>
                                        <b>Size :</b> 42
                                    </ProductSize>
                                </ProductInfo>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmount>
                                    <Add />
                                    <Amount>1</Amount>
                                    <Remove />
                                </ProductAmount>
                                <ProductPrice>$ 15</ProductPrice>
                                
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 50</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>
                                Setimated Shipping
                            </SummaryItemText>
                            <SummaryItemPrice>$ 5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discont</SummaryItemText>
                            <SummaryItemPrice>$ -5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText
                                style={{ fontSize: 25, fontWeight: 500 }}
                            >
                                Total
                            </SummaryItemText>
                            <SummaryItemPrice
                                style={{ fontSize: 25, fontWeight: 500 }}
                            >
                                $ 50
                            </SummaryItemPrice>
                        </SummaryItem>
                        <Button>Check Now</Button>
                    </Summary>
                </Buttom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
