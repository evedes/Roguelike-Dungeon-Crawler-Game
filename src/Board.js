import React from 'react'
import BoardInfo from './BoardInfo'
import BoardDash from './BoardDash'
import './Board.css'

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Initialize Game of Life + Definitions
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Init Vars
let boardArray = []
const lines = 20
const cols = 30
const cells = lines * cols

// Init Board Array w/ Random Numbers

function initBoardArray(cells){
  for (let i = 0 ; i < cells ; i++){
    boardArray[i]=Number(Math.floor(Math.random()*3))
  }
  return boardArray;
}

// Set Initial State 

function initialState(boardSize) {
  return(
  {
    boardstate: initBoardArray(cells),
    width: cols*25+12, 
    lines: lines, 
    cols:cols, 
    cells: cells, 
    generation: 0, 
    speed: 100
  })
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BOARD CLASS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState()
  }


  render(){
    
    return( 
      <div className="maincontainer container-fluid">
          <BoardDash />
          
          {/* return the gaming board */}
          <div className="gamingboard" style={{width: this.state.width}}>
            {this.state.boardstate.map((cell,i)=>{
              return(
                <div className="square" value={cell} key={i}></div>
              )
              })
            }
          </div>
           
          <BoardInfo />
      </div>
    )
  }
}

export default Board;