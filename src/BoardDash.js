import React from 'react'

const BoardDash = (props) => {
    return(
      <div className="boarddash">
        <div className="row h2title">Player's Status</div>
        <div className="row">
          <div className="col-md-4">
            <h3 className="h3title">Health Status</h3>
              <h5>HEALTH: +100</h5>
          </div>
          <div className="col-md-4">
                <h3 className="h3title">Player's Status</h3>        
                <h5>LEVEL: 01 </h5>   
          </div>
          <div className="col-md-4">
                <h3 className="h3title">Weapon Status</h3>
                <h5>WEAPON: Fists (+3)</h5>
          </div>
        </div>
        <div className="row h2title">Game Of Life</div>
      </div>
    )
  }

export default BoardDash