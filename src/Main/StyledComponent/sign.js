import styled from "styled-components";

   const Sign= styled.p`
           color: white;
           position: absolute;
           top:90px;
           font-size: 30px;
           left:140px;
`



const Name=styled.input`

position: absolute;
top:160px;
left:30px;
height: 35px;
border: 2px solid whitesmoke;
background: #1b1b1b;
border-radius: 7px;
color:white;
padding: 3px;
`

const Surname=styled.input`

position: absolute;
top:160px;
right: 30px;
height: 35px;
border: 2px solid whitesmoke;
background: #1b1b1b;
border-radius: 7px;
color:white;
padding: 3px;

`

const Mail=styled.input`
position: absolute;
top:220px;
right: 35px;
height: 35px;
width:330px ;
border: 2px solid whitesmoke;
background: #1b1b1b;
border-radius: 7px;
color:white;
padding: 3px;

`
const Password=styled.input`
    position: absolute;
    top:290px;
    right: 35px;
    height: 35px;
    width:330px ;
    border: 2px solid whitesmoke;
    background: #1b1b1b;
    border-radius: 7px;
    color:white;
    padding: 3px;

`
const Checkbox=styled.input`

     position: absolute;
    top:350px;
    left: 33px;
    width: 20px;

`

const Button=styled.button`

position: absolute;
top:400px;
right: 35px;
height: 45px;
width:330px ;
border: 2px solid whitesmoke;
background:#90CAF9; 
border-radius: 10px;
color:#1B1B1B;
padding: 3px;
font-size: 20px;


`
const Display = styled.div`
          position: absolute;
          top:50%;
          left: 45%;
          transform: translate(-50%, -50%);
          z-index: 55555;
          height: 520px;
          width: 412px;
          background: #1b1b1b;
          border-radius: 6px;
          text-align: center;
`



    export  {Sign,Name,Surname,Mail,Password,Checkbox,Button,Display}