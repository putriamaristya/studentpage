import React from 'react'
import './App.css';
import img from './img/BTS.jpg';
import styled, {  } from "styled-components"


const Title = styled.h1`
line-height: 0.1;
color: #191970;  
font-size: 2 em;
  text-align: center;
`;

const Title2 = styled.div`
    color: #808080;  
    font-size: 1.2 em;
    text-align: center; 
  
`;

const Wrapper = styled.div`
    justify-content: center;
    align-items: center;
    background: ;
    height: 100vh;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
  
`;

const Picture = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100vh;
`;

const FormGroup = styled.div`
    display: flex;
    color: #191970;
    display: block;
	width: 350px;
    margin: 10px auto;
`;

const Label = styled.label`
    margin-bottom: 0.5em;
    font-size: 1.2em; 
	color: #191970;
    display: block;
    
`;


const Input = styled.input`
      
    font-size: 1.2em;  
    padding: 0.5em;
	color: #191970;
	background: #F5F5F5;
	border: none;
	border-radius: 3px;
	width: 90%;
	margin-bottom: 0.5em;
`;

const Button = styled.button`
    padding: 0.5em 1em;  
    font-size: 1.1em;
    background: #191970;
    border: 2px solid #191970;
    border-radius: 3px;
    color: white;
`;

function login() {
    return (
    <Wrapper>
    <Row>
        <Col size={1}>
            <Picture></Picture>
        </Col>
        <Col size={1}>
            <Title>L I T T E R A</Title>
            <Title2>Welcome! Please login to start the test</Title2>
            <br/>
            <div>
            <FormGroup>
            <Label htmlFor="label">Username</Label>
            <Input id="label" />
            </FormGroup>
            <FormGroup>
            <Label>Password</Label>
            <Input />
            </FormGroup>
            <FormGroup>
            <Button>Login</Button>
            </FormGroup>
            
            </div>;
        </Col>
    </Row>
    </Wrapper>
 
    )
}

export default login
