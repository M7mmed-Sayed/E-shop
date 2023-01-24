import React from 'react'
import styled from 'styled-components'
import {
    Email,
    Facebook,
    Instagram,
    Phone,
    Room,
    Support,
    Telegram,
    Twitter,
} from '@mui/icons-material'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
    display: flex;

     ${tablet({
        alignItems: 'center',
        justfyContent: 'center',
        flexDirection: 'column',
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${tablet({
        alignItems: 'center',
        justfyContent: 'center',
        flexDirection: 'column',
    })}
`
const Logo = styled.h1``
const Description = styled.p`
    margin: 10px 5px;
`
const SocialContainer = styled.div`
    display: flex;
    margin: 20px;
`
const SocialIcon = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    margin: 0px 10px;
    background-color: #${(props) => props.bg};
`
const Center = styled.div`
    flex: 1;
    padding: 25px;
    
    ${tablet({
        display: 'none',
    })}
`
const Title = styled.h3`
    margin-bottom: 45px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
    })}
    
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    ${tablet({
      
        flexDirection: 'column',
    })}
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
   
`
const ConectItem = styled.li`
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    width: 90%;
`
const Payment = styled.img`
    width: 60%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MSM</Logo>
                <Description>
                    MSM: MSM System will give the customers the tendency to have
                    products in bulk and can have conversations with the admin
                    regarding the products. In this way, the customers can
                    negotiate on the bulk products with the admin. The admin can
                    approve/disapprove the quoted request of the customer.
                </Description>
                <SocialContainer>
                    <SocialIcon bg="2b5198">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="2a6ce5">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg="A90929">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="5083e1">
                        <Telegram />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>MayBe Useful</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashon</ListItem>
                    <ListItem>Women Fashon</ListItem>
                    <ListItem>Accessory</ListItem>
                    <ListItem>Careers</ListItem>
                </List>
            </Center>
            <Right>
                <Title>CONNECT WITH MSM</Title>
                <List>
                    <ConectItem>
                        <Room style={{ marginRight: '10px' }} /> Assiut Manqbad
                    </ConectItem>
                    <ConectItem>
                        <Phone style={{ marginRight: '10px' }} />
                        +088777777
                    </ConectItem>
                    <ConectItem>
                        <Email style={{ marginRight: '10px' }} />
                        contact@msm.tech
                    </ConectItem>
                    <ConectItem>
                        <Support style={{ marginRight: '10px' }} />
                        Product help
                    </ConectItem>
                </List>
                <Payment src="https://store.webkul.com/skin/frontend/webkul/sky/images/secure-payment-methods.png" />
            </Right>
        </Container>
    )
}

export default Footer
