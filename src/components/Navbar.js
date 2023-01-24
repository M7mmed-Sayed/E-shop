import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import {
    LanguageOutlined,
    Search,
    ShoppingCartOutlined,
} from '@mui/icons-material'
import { mobile, tablet } from '../responsive'
const Container = styled.div`
    height: 60px;
    box-shadow: 0px 3px 0px 0px #2e2f30;
    margin-bottom:8px;
    ${mobile({
        hight: '50px',
    })}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: '10px 0px',
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    ${mobile({
        display: 'none',
    })}
`
const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({
        width: '50px',
    })}
    ${tablet({
        width: '70px',
    })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    align-items: center;
    margin-left: 30px;
    border-radius: 10px;
    display: flex;
    padding: 5px;
    ${tablet({
        marginLeft: '10px',
    })}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    margin: 0px;
    align-items: center;
    ${mobile({
        fontSize: '24px',
    })}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${tablet({
        justifyContent: 'center',
        flex: '2',
    })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: '12px',
        marginLeft: '10px',
    })}
`

const Navbar = () => {
    return (
        <Container className="container">
            <Wrapper>
                <Left>
                    <Language>
                        <LanguageOutlined />
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
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
        </Container>
    )
}

export default Navbar
