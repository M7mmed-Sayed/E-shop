import React from 'react'
import styled from 'styled-components'
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
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 500px;
    padding: 20px;
    background-color: white;
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
const Button = styled.button`
    width: 30%;
    border: none;
    margin: 20px;
    padding: 15px 10px;
    background: linear-gradient(
        120deg,
        rgb(255 80 7 / 80%),
        rgb(25 100 200 / 50%),
        rgb(2 80 0 / 80%)
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
`
const LogIn = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="UserName " />
                    <Input placeholder="Password " />
                    <Button>LogIn</Button>

                    <Link>Do Not You remember the password?</Link>
                    <Link>Create An Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default LogIn
