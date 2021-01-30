import React from 'react'
import './App.css';
import img from './img/btswhite.jpg';
import styled, { css } from "styled-components"


const Wrapper = styled.div`
    display: flex;    
    justify-content: center;
    align-items: center;
    background-image: url(${img});
    height: 100vh;
`;

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 800px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  background: white;
`;

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const CardHeading = styled.h1`
  color: red;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

const CardHeading2 = styled.h4`
  color: #303030;  
  font-size: 22px;
  font-weight:;
  text-align: center;
`;

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`;

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;


const CardButton = styled.button`
  width: 150px;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #191970;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

function warning() {
    return (
        <div>
            <Wrapper>
            <CardWrapper>
        <CardHeader>
          <CardHeading>WARNING</CardHeading>
          <CardHeading2>Tes ini diawasi penuh oleh tim Littera.</CardHeading2>
          <CardHeading2>Mohon untuk tidak melakukan kecurangan dalam bentuk apapun.</CardHeading2>
          <CardHeading2>Selama tes berlangsung, dimohon untuk tidak memindahkan tab,
          <CardHeading2>karena sesi akan berakhir dan tes tidak dapat dilanjutkan.</CardHeading2>

          </CardHeading2>

        </CardHeader>

        <CardBody>
          <CardFieldset>
            
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Lanjut</CardButton>
          </CardFieldset>

        </CardBody>
      </CardWrapper>

            </Wrapper>
        </div>
    )
}

export default warning
