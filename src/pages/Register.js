import React from 'react'
import styled from 'styled-components'
import {  tablet } from '../responsive'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background: linear-gradient(
        40deg,
        rgb(242 10 255 / 50%),
        rgb(20 80 30 / 50%)
    );
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
  
    ${tablet({
        width: '80%',
    })}

`
const Title = styled.h1`
    margin: 0;
    padding: 0;
    font-size: 30px;
    font-weight: 450;
`
const Form = styled.form`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
`
const Input = styled.input`
    flex: 1;
    margin: 15px 10px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 20px;
    margin: 20px 5px;
`
const Button = styled.button`
    width: 30%;
    border: none;
    margin-left: 20px;
    padding: 15px 10px;
    background: linear-gradient(
        120deg,
        rgb(255 80 255 / 80%),
        rgb(0 100 200 / 50%),
        rgb(255 80 0 / 80%)
    );
    border-radius: 10px;
    box-shadow: 8px 8px 0px 0px lightgray;
    cursor: pointer;
    font-size: 25px;
    font-weight: 200;
    &:hover {
        transform: scale(1.2);
        transition: all 0.4s ease;
    }
`
const Link = styled.a`
    text-transform: uppercase;
    margin-bottom: 10px;
`
const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create Account</Title>
                <Form>
                    <Input placeholder="First Name " />
                    <Input placeholder="Last Name " />
                    <Input placeholder="UserName " />
                    <Input placeholder="Email" />
                    <Input placeholder="Password " />
                    <Input placeholder="Confirm Password" />
                    <Agreement>
                        By creating an Account , I consest to Processing of my
                        personal data in accordance with the
                        <b> Privacy Policy</b>
                    </Agreement>
                    <Link>Aready have an Accont</Link>
                </Form>
                <Button>Create</Button>
            </Wrapper>
        </Container>
    )
}

export default Register
