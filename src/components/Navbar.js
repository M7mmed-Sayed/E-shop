import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'

const Container = styled.div`
    height: 60px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;

    justify-content: space-betwwen;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const Input = styled.input`
    border: none;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    align-items: center;
    margin-left: 30px;
    padding: 5px;
`
const Center = styled.div`
    flex: 1;
`
const Logo = styled.h1`
font-wight=bold;
text-align:center;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
    return (
        <Container className="container">
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>SMS</Logo>
                </Center>
                <Right>
                    <MenuItem>SIGN UP</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            Navbar
        </Container>
    )
}

export default Navbar
