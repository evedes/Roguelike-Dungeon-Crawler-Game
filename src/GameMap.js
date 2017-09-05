import React from 'react'
import BoardInfo from './BoardInfo'
import BoardDash from './BoardDash'
import './GameMap.css'

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Initialize Game  + Definitions
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Init Vars
let boardArray = []


// Init Board Array w/ Random Numbers

function initBoardArray(){
  for (let i = 0 ; i < 600 ; i++){
    boardArray[i]=0
  }
  return boardArray;
}

// Set Initial State 

function initialState(boardSize) {
  return(
  {
    boardstate: initBoardArray(),
    lines: 20,
    cols: 30,
    cells: 600, 
    generation: 0, 
    speed: 100,
    heroPos: 0
  })
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BOARD CLASS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class GameMap extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState()
    
  }

  styleCell = (i) => {
    if(i===this.state.heroPos){
      return './img/hero.png'
    }
    else {
      return 'white'
    }
    
  }

  render(){
  
    return( 
      <div className="maincontainer container-fluid">
          <BoardDash />
          
          {/* return the gaming board */}
          <div className="gamingboard">
            {this.state.boardstate.map((cell,i)=>{
              return(
                <div style={{backgroundImage: this.styleCell(i)}} className="square" value={cell} key={i}></div>
              )
              })
            }
          </div>
           
          <BoardInfo />
      </div>
    )
  }
}

export default GameMap;