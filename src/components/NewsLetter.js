import React from 'react'
import styled from 'styled-components'
import { Send } from '@mui/icons-material'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: #fcfdfe;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;   
`
const Description = styled.div`
    font-size: 25px;
    font-weight: 350;
    margin-bottom: 25px;

    ${mobile({
        textAlign: 'center',
    })}
`
const InputContainer = styled.div`
    width: 50%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-items: center;
    justify-content: space-between;
    border: 1px solid lightgray;

    ${tablet({
        width: '80%',
    })}
`
const Input = styled.input`
    border: none;
    outline: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: tomato;
    cursor: pointer;
`
const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>
                Get Timely Update from your favorite products.
            </Description>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
