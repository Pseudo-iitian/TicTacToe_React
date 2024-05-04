import React, { useRef, useState } from 'react'
import './TicTacToe.css'
import Boxes from './Boxes'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'



export default function TicTacToe(){
  const [data,setData] = useState(new Array(9).fill(''))
  const [count,setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [image, setImage] = useState(new Array(9).fill(null));
  const titleRef = useRef(null);

  const [winImage,setWinImage] = useState(null);

  function toggle(ind){
    // alert(count);
    if(lock || data[ind]) return ;
 

    const newData = [...data];
    const newImage = [...image];

    if(count%2===0){
      newData[ind] = 'x';
      newImage[ind] = cross_icon;
    }
    else{
      newData[ind] = 'o';
      newImage[ind] = circle_icon
    }
    setImage(newImage)
    setData(newData)
    setCount(count+1)

    // checkWinner();
  }

  setTimeout(() => {
    checkWinner();
  }, 0);

  
  // these function will run continuously ok 
  const checkWinner = () => {
    if(data[0] && data[0]===data[1] && data[1]===data[2]){
      setLock(true);
      won(data[2]);
    }
    else if(data[3] && data[3]===data[4] && data[4]===data[5]){
      setLock(true);
      won(data[5]);
    }
    else if(data[6] && data[6]===data[7] && data[7]===data[8]){
      setLock(true);
      won(data[8]);
    }
    else if(data[0] && data[0]===data[3] && data[3]===data[6]){
      setLock(true);
      won(data[6]);
    }
    else if(data[1] && data[1]===data[4] && data[4]===data[7]){
      setLock(true);
      won(data[7]);
    }
    else if(data[2] && data[2]===data[5] && data[5]===data[8]){
      setLock(true);
      won(data[8]);
    }
    else if(data[0] && data[0]===data[4] && data[4]===data[8]){
      setLock(true);
      won(data[8]);
    }
  }

  const won = (winner) => {
    // alert('You Won');
    console.log(winner);
    if(winner==='x'){
      // titleRef.current.innerHTML = `Congratulations: <img src=${cross_icon}/>`
      setWinImage(cross_icon)
    }
    else{
      // titleRef.current.innerHTML = `Congratulations: <img src=${circle_icon}/>`
      setWinImage(circle_icon)
    }

    console.log("you won");
  }
  

  const reset = () =>{
    setCount(0);
    setData(new Array(9).fill(''));
    setLock(false);
    setImage(new Array(9).fill(null));
    titleRef.current.innerHTML = `Tic Tac Toe game in <span>React</span>`;
  }

  const titleEl = winImage ? <img src={winImage} alt="Winner" /> : <>Tic Tac Toe game in <span>React</span></>
  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>
        {winImage && <p>Congratulation: </p>}
        {titleEl}
        {winImage && <p> the game </p>}
      </h1>
      <div className="board">
        <div className="row1">
          <Boxes
          key={0}
          ind = {0}
          onClick = {()=>toggle(0)}
          // toggle = {()=>{toggle(0)}}
          img={image[0]}
          />
          <Boxes
          key={1}
          ind = {1}
          onClick = {()=>toggle(1)}
          // toggle = {()=>{toggle(1)}}
          img={image[1]}
          />
          <Boxes
          key={2}
          ind = {2}
          onClick = {()=>toggle(2)}
          // toggle = {()=>{toggle(2)}}
          img={image[2]}
          />
        </div>
        <div className="row2">
          <Boxes
          ind = {3}
          key={3}
          onClick = {()=>toggle(3)}
          // toggle = {()=>{toggle(3)}}
          img={image[3]}
          />
          <Boxes
          key={4}
          ind = {4}
          onClick = {()=>toggle(4)}
          // toggle = {()=>{toggle(4)}}
          img={image[4]}
          />
          <Boxes
          ind = {5}
          key={5}
          onClick = {()=>toggle(5)}
          // toggle = {()=>{toggle(5)}}
          img={image[5]}
          />
        </div>
        <div className="row3">
          <Boxes
          ind = {6}
          key={6}
          onClick = {()=>toggle(6)}
          // toggle = {()=>{toggle(6)}}
          img={image[6]}
          />
          <Boxes
          key={7}
          ind = {7}
          onClick = {()=>toggle(7)}
          // toggle = {()=>{toggle(7)}}
          img={image[7]}
          />
          <Boxes
          key={8}
          onClick = {()=>toggle(8)}
          ind = {8}
          // toggle = {()=>{toggle(8)}}
          img={image[8]}
          />
        </div>
      </div>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  )
}

// raf to complete this code