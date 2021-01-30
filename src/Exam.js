import React from 'react'
import './App.css';
import img from './img/btswhite.jpg';
import ReactDOM from "react-dom";
import CountDownTimer from './CountDownTimer';
import styled, { css } from "styled-components"
// import { Grid, Cell } from "styled-css-grid";

const Container = styled.div`
  height:100%;  
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-columns: 9fr 3fr;
  grid-template-rows: 2fr 10fr;
  gap: 20px 20px;
  grid-template-areas:
    'header sidebar'
    'main footer';

  // background-color: green;
  background-image: url(${img});
  .itemA {
    grid-area: header;
    // background-color: yellow;
  }

  .itemB {
    grid-area: main;
    // background-color: blue;
  }

  .itemC {
    grid-area: sidebar;
    // background-color: navy;
  }

  .itemD {
    grid-area: footer;
    // background-color: purple;
  }
`
const CardWrapper = styled.div`
  display: flex;  
  overflow: hidden;
  margin: auto;
  height: 100%;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  justify-content: space-between;
  flex-direction: column;
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
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.16);
    transform: translate(0, -2px);
  }
`;

const ButtonGroup = styled.div`
  // button group for prev and next
  display: flex;
  justify-content: center;
  // justify-content: space-between;
`;
const CardHeader = styled.header` 
//This is top part for question (Card B - left);
// background-color:yellow;
padding-bottom: 32px;
justify-content: between;
`;

const CardHeader2 = styled.header` 
// this is top part for question buttons (Card D - right);
// background-color:green;
padding-bottom: 32px;
justify-content: center;
text-align: center;
`;

const CardFieldset = styled.div`
//this is bottom part of question&question button, space for button (Card B&D)
// background-color:grey;  
position: relative;
  justify-content: center;
  padding: 0;
  margin: 0;
  border: 0;
  padding-bottom: 20px;
`;

const TimeWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

function Exam() {
    return ( 
<Container >
<div className="itemA">
<CardWrapper>
<h1>Putri Amaristya Purwono</h1>
<h2>081511733030</h2>
</CardWrapper>
</div>
<div className="itemB">
<CardWrapper>
  <CardHeader>
  <h1> Tumpahan minyak di lautan akibat kebocoran kapal tanker dapat menyebabkan permukaan laut tertutup minyak. Kondisi ini dapat menghalangi fotosintesis plankton, selanjutnya menyebabkan rantai makanan terputus. Apakah memungkinkan terjadinya evolusi dalam ekosistem dalam jangka waktu lama? </h1>
  <h2>Radio buttons 1</h2>
  <h2>Radio buttons 2</h2>
  <h2>Radio buttons 3</h2>
  <h2>Radio buttons 4</h2>
  <h2>Radio buttons 5</h2>
  <CardButton> Lock Answer </CardButton>
  
  </CardHeader>
  <CardFieldset>
  <ButtonGroup>
    <CardButton>Previous</CardButton>
    <CardButton>Next</CardButton>
  </ButtonGroup>
  </CardFieldset>
</CardWrapper>
</div>
<div className="itemC">
<CardWrapper>
  <TimeWrapper>
    TIME
  </TimeWrapper>
</CardWrapper>
</div>
<div className="itemD">
<CardWrapper>
  <CardHeader2>
  <h1> Questions </h1>
  
  </CardHeader2>
  <CardFieldset>
  <ButtonGroup>
    <CardButton>Submit/End Test</CardButton>
  </ButtonGroup>
  </CardFieldset>
</CardWrapper>
</div>
</Container>
    )
}

export default Exam
