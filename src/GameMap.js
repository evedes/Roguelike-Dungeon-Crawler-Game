import React from 'react'
import keydown from 'react-keydown'
import './GameMap.css'

// Images Import
import heroImg from './img/hero.png'
import floor01 from './img/floor01.png'
import wallH from './img/wall_h.png'
import wallV from './img/wall_v.png'
import LRCorner from './img/lower_right_corner.png'
import LLCorner from './img/lower_left_corner.png'
import ULCorner from './img/upper_left_corner.png'
import URCorner from './img/upper_right_corner.png'
import portal from './img/portal.png'
import sword01 from './img/sword01.png'

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Initialize Game Map Definitions
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Map Codes / Legend
//  0 - Empty Cell
//  1 - Horizontal Wall
//  2 - Vertical Wall
//  3 - Upper Left Corner
//  4 - Upper Right Corner
//  5 - Bottom Left Corner
//  6 - Bottom Right Corner
// 10 - Portal Icon



// GAME MAPS DESIGN (boardArray01[], boardArray02[], boardArray03[], boardArray04[])

//++++++++++++++++++++++++ GAME MAP 01 ++++++++++++++++++++++++
let boardArray01 = []

    for (let i = 0 ; i < 600 ; i++) {
      boardArray01[i]=0
    }  

    // Define Exterior Top Horizontal Wall
    for (let i = 1; i < 29 ; i++){
    boardArray01[i]=1
    }

    // Define Exterior Bottom Horizontal Wall
    for (let i = 571; i < 599 ; i++){
    boardArray01[i]=1
    }

    // Define Exterior Left Vertical Wall
    for (let i = 30; i < 570; i+=30){
    boardArray01[i]=2
    }

    // Define Exterior Right Vertical Wall
    for (let i = 59; i < 570 ; i+=30){
    boardArray01[i]=2
    }

    // Define Exterior Wall Corners
    boardArray01[0]=3; 
    boardArray01[29]=4; 
    boardArray01[570]=5;
    boardArray01[599]=6 

    // Define Interior Walls - Scenario 01

    boardArray01[37]=2
    boardArray01[62]=1
    boardArray01[63]=1
    boardArray01[64]=1
    boardArray01[65]=4
    boardArray01[67]=2
    boardArray01[70]=2

    boardArray01[95]=2
    boardArray01[97]=2
    boardArray01[100]=2

    boardArray01[125]=2
    boardArray01[127]=2
    boardArray01[130]=2

    for (let i =131 ; i < 149 ; i++) {
    boardArray01[i]=1
    }
    boardArray01[144]=4
    boardArray01[145]=0
    boardArray01[146]=3


    boardArray01[155]=2
    boardArray01[157]=2
    boardArray01[160]=2
    boardArray01[174]=2
    boardArray01[176]=2
    boardArray01[181]=1
    boardArray01[182]=1
    boardArray01[183]=1
    boardArray01[185]=2
    boardArray01[187]=2
    boardArray01[190]=2
    boardArray01[204]=2
    boardArray01[206]=2
    boardArray01[209]=10

    boardArray01[215]=2
    boardArray01[217]=2

    boardArray01[220]=2
    boardArray01[234]=2
    boardArray01[236]=2
    boardArray01[245]=2
    boardArray01[247]=2
    boardArray01[250]=2
    boardArray01[266]=2
    boardArray01[275]=2
    boardArray01[277]=5
    boardArray01[278]=1
    boardArray01[280]=5
    boardArray01[281]=1
    boardArray01[282]=1
    boardArray01[283]=1
    boardArray01[284]=1
    boardArray01[285]=1
    boardArray01[286]=4

    for (let i = 288 ; i < 296 ; i++) {
    boardArray01[i]=1
    }
    boardArray01[288]=3
    boardArray01[296]=6

    boardArray01[305]=2
    boardArray01[316]=2
    boardArray01[318]=2

    for (let i = 332 ; i < 344 ; i++){
    boardArray01[i]=1
    }
    boardArray01[344]=4
    boardArray01[346]=2
    boardArray01[348]=2
    boardArray01[355]=3

    boardArray01[374]=2
    boardArray01[376]=2
    boardArray01[378]=2
    boardArray01[385]=2

    boardArray01[404]=2
    boardArray01[406]=2
    boardArray01[408]=2
    boardArray01[529]=1
    boardArray01[530]=1
    boardArray01[531]=1
    boardArray01[532]=1
    boardArray01[415]=2
    boardArray01[434]=2
    boardArray01[436]=2
    boardArray01[438]=2
    boardArray01[445]=2

    for (let i = 451 ; i < 459 ; i++){
    boardArray01[i]=1
    }
    boardArray01[460]=4
    boardArray01[464]=2
    boardArray01[468]=2

    boardArray01[475]=2
    boardArray01[490]=2
    boardArray01[494]=2
    boardArray01[498]=2
    boardArray01[520]=2
    boardArray01[524]=2
    boardArray01[528]=5
    boardArray01[550]=2

    boardArray01[466]=2
    boardArray01[496]=2
    boardArray01[505]=2
    boardArray01[526]=2
    boardArray01[529]=1
    boardArray01[530]=1
    boardArray01[531]=1
    boardArray01[532]=1
    boardArray01[533]=6
    boardArray01[535]=2
    boardArray01[554]=2
    boardArray01[556]=2
    boardArray01[565]=2
//
  
//++++++++++++++++++++++++ GAME MAP 02 ++++++++++++++++++++++++
let boardArray02 = []

    for (let i = 0 ; i < 600 ; i++) {
      boardArray02[i]=0
    }

    //Corners
    boardArray02[0]=3
    boardArray02[29]=4
    boardArray02[570]=5
    boardArray02[599]=6

    // Define Exterior Top Horizontal Wall
    for (let i = 1; i < 29 ; i++){
      boardArray02[i]=1
      }
  
      // Define Exterior Bottom Horizontal Wall
      for (let i = 571; i < 599 ; i++){
      boardArray02[i]=1
      }
  
      // Define Exterior Left Vertical Wall
      for (let i = 30; i < 570; i+=30){
      boardArray02[i]=2
      }
  
      // Define Exterior Right Vertical Wall
      for (let i = 59; i < 570 ; i+=30){
      boardArray02[i]=2
      }
    
    // Interior Walls

    boardArray02[35]=2
    boardArray02[45]=2
    boardArray02[53]=2    
    boardArray02[63]=2
    boardArray02[65]=2
    boardArray02[68]=2
    boardArray02[75]=2
    boardArray02[83]=2
    boardArray02[87]=4
    boardArray02[93]=2
    boardArray02[95]=2
    boardArray02[98]=2
    boardArray02[105]=2
    boardArray02[113]=2  
    boardArray02[117]=2
    boardArray02[123]=2
    boardArray02[125]=2
    boardArray02[128]=2
    boardArray02[135]=2
    boardArray02[140]=2
    boardArray02[143]=2
    boardArray02[147]=2
    boardArray02[153]=2
    boardArray02[155]=2
    boardArray02[158]=2
    boardArray02[170]=2
    boardArray02[173]=2
    boardArray02[174]=1
    boardArray02[175]=1
    
    boardArray02[177]=2
    boardArray02[183]=2
    boardArray02[185]=2
    boardArray02[192]=1
    boardArray02[193]=1

    for (let i = 187 ; i < 200 ; i++){
      boardArray02[i]=1
    }

    boardArray02[200]=6
    boardArray02[203]=2
    
    boardArray02[207]=2
    boardArray02[211]=1
    boardArray02[212]=1
    boardArray02[213]=6
    boardArray02[215]=2
    boardArray02[223]=2
    boardArray02[233]=2
    
    boardArray02[237]=2
    boardArray02[245]=2
    boardArray02[253]=2
    boardArray02[263]=2
    
    boardArray02[267]=2
    boardArray02[272]=3
    boardArray02[273]=1
    boardArray02[274]=1
    boardArray02[275]=6
    boardArray02[279]=3
    boardArray02[280]=1
    boardArray02[281]=1
    boardArray02[287]=3
    boardArray02[283]=2
    boardArray02[288]=1
    boardArray02[289]=1
    boardArray02[290]=1
    boardArray02[291]=1
    boardArray02[292]=1
    
    boardArray02[293]=6
    
    boardArray02[297]=2
    boardArray02[302]=5
    boardArray02[303]=1
    boardArray02[304]=1
    boardArray02[305]=4
    boardArray02[309]=2
    boardArray02[310]=10
    boardArray02[313]=2
    boardArray02[317]=2
    boardArray02[327]=2
    boardArray02[335]=2
    boardArray02[339]=5
    boardArray02[340]=1
    boardArray02[341]=1
    boardArray02[343]=2
    boardArray02[347]=2
    boardArray02[354]=3
    boardArray02[355]=1
    boardArray02[356]=1
    boardArray02[357]=6
    boardArray02[365]=2
   
    boardArray02[373]=2
    boardArray02[377]=2
    boardArray02[384]=2
    boardArray02[395]=2
    boardArray02[403]=2
    boardArray02[407]=2
    boardArray02[414]=2
    boardArray02[425]=2
    boardArray02[433]=2
    boardArray02[444]=2
    boardArray02[451]=1
    boardArray02[452]=1
    boardArray02[453]=1
    boardArray02[455]=2

    for (let i = 456; i < 475 ; i++){
      boardArray02[i]=1
    }

    boardArray02[474]=6

    boardArray02[476]=1
    boardArray02[477]=1
    boardArray02[478]=1

    boardArray02[485]=2
    boardArray02[515]=2

    boardArray02[526]=2
    boardArray02[556]=2

//

//++++++++++++++++++++++++ GAME MAP 03 ++++++++++++++++++++++++
let boardArray03 = []

    for (let i = 0 ; i < 600 ; i++) {
      boardArray03[i]=0
    }

    //Corners
    boardArray03[0]=3
    boardArray03[29]=4
    boardArray03[570]=5
    boardArray03[599]=6

    // Define Exterior Top Horizontal Wall
    for (let i = 1; i < 29 ; i++){
      boardArray03[i]=1
      }
  
      // Define Exterior Bottom Horizontal Wall
      for (let i = 571; i < 599 ; i++){
      boardArray03[i]=1
      }
  
      // Define Exterior Left Vertical Wall
      for (let i = 30; i < 570; i+=30){
      boardArray03[i]=2
      }
  
      // Define Exterior Right Vertical Wall
      for (let i = 59; i < 570 ; i+=30){
      boardArray03[i]=2
      }

      boardArray03[50]=2
      boardArray03[80]=2

      for (let i = 91; i < 113; i++){
        boardArray03[i]=1
      }

      boardArray03[95]=4
      boardArray03[96]=0
      boardArray03[110]=6
      boardArray03[111]=0

      for (let i = 130 ; i < 251; i+=30){
        boardArray03[i]=2
      }
      
      for (let i = 125 ; i < 306; i+=30){
        boardArray03[i]=2
      }

      for (let i = 138 ; i<319 ; i+=30){
        boardArray03[i]=2
      }

      boardArray03[101]=0

      boardArray03[228]=0

      for (let i = 235 ; i < 239 ; i++){
        boardArray03[i]=1
      }

      boardArray03[278]=3
      boardArray03[279]=1
      boardArray03[280]=2
      boardArray03[305]=0
      boardArray03[308]=2
      boardArray03[310]=2
     
      for (let i = 333 ; i < 338; i++){
        boardArray03[i]=1
      }

      boardArray03[338]=6
      boardArray03[340]=5
      boardArray03[341]=1
      boardArray03[342]=1
      
      for (let i = 343 ; i < 357 ; i++){
        boardArray03[i]=1
      }
      boardArray03[356]=4
      boardArray03[365]=2
      boardArray03[373]=2
      boardArray03[386]=2
      boardArray03[395]=2
      boardArray03[403]=2
      boardArray03[409]=2
      boardArray03[416]=2
      boardArray03[425]=2
      boardArray03[433]=2
      boardArray03[439]=2
      boardArray03[446]=2

      for (let i = 451; i < 454; i++){
        boardArray03[i]=1
      }

      boardArray03[455]=2
      boardArray03[463]=2
      boardArray03[469]=2
      boardArray03[476]=2
      boardArray03[485]=2
      boardArray03[493]=2
      boardArray03[499]=2
      boardArray03[506]=2

      for (let i=512 ; i<515; i++){
        boardArray03[i]=1
      }



      boardArray03[515]=2
      boardArray03[523]=5
      boardArray03[524]=1
      boardArray03[525]=1
      boardArray03[526]=1
      boardArray03[527]=1
      boardArray03[529]=2

      for (let i = 530 ; i < 535 ; i++){
        boardArray03[i]=1
      }

      for (let i = 113 ; i <324 ; i+=30){
        boardArray03[i]=2
      }
      boardArray03[113]=4

      boardArray03[536]=2
      boardArray03[544]=10
      boardArray03[545]=2
      boardArray03[559]=2
//

//++++++++++++++++++++++++ GAME MAP 04 ++++++++++++++++++++++++
let boardArray04 = []

    for (let i = 0 ; i < 600; i++){
        boardArray04[i]=0
    }

    //Corners
    boardArray04[0]=3
    boardArray04[29]=4
    boardArray04[570]=5
    boardArray04[599]=6
      

    // Define Exterior Top Horizontal Wall
    for (let i = 1; i < 29 ; i++){
      boardArray04[i]=1
      }

    for (let i = 37; i < 548; i+=30){
      boardArray04[i]=2
    }

      // Define Exterior Bottom Horizontal Wall
      for (let i = 571; i < 599 ; i++){
      boardArray04[i]=1
      }

      // Define Exterior Left Vertical Wall
      for (let i = 30; i < 570; i+=30){
      boardArray04[i]=2
      }

      // Define Exterior Right Vertical Wall
      for (let i = 59; i < 570 ; i+=30){
        boardArray04[i]=2
      }

      boardArray04[275]=1
      boardArray04[276]=1

      for (let i = 34; i < 545; i+=30){
        boardArray04[i]=2
      }

      for (let i = 181 ; i < 184; i++){
        boardArray04[i]=1
      }

      for (let i = 199 ; i < 410; i+=30){
        boardArray04[i]=2
      }
      boardArray04[154]=0

      boardArray04[169]=3

      for (let i = 170; i < 179; i++){
        boardArray04[i]=1
      }
      
      boardArray04[184]=4

      boardArray04[244]=0
      boardArray04[274]=3
      boardArray04[439]=5

      for (let i = 99; i < 116; i++){
        boardArray04[i]=1
      }

      for (let i = 311 ; i<492; i+=30){
        boardArray04[i]=2
      }

      for (let i = 315 ; i<596; i+=30){
        boardArray04[i]=2
      }

      for (let i = 440; i < 447; i++){
        boardArray04[i]=1
      }
      for (let i = 473; i < 534; i+=30){
        boardArray04[i]=2
      }

      for(let i = 277 ; i < 289; i++){
        boardArray04[i]=1
      }

      for (let i=133; i < 254; i+=30){
        boardArray04[i]=2
      }
         
      boardArray04[282]=0
      boardArray04[283]=5 
      boardArray04[287]=0
      boardArray04[288]=0
      
      boardArray04[307]=0
      boardArray04[514]=0

//



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Set Initial State 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initialState(boardSize) {
  return(
  {
    boardstate: boardArray04,
    lines: 20,
    cols: 30,
    cells: 600, 
    heroPos: 31,
    dungeon: 1,
    level: 1
  })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MAP CLASS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class GameMap extends React.Component {
  @keydown('up','down','left','right')
      submit(event) {
        this.heroMove(event)
      }


  constructor(props){
    super(props);
    this.state = initialState()
  }


  heroPos = (i) => {
    
    if(i===this.state.heroPos){
      return `url(${sword01}),url(${heroImg}),url(${floor01})` 
    }

    else if (this.state.boardstate[i]===1) return `url(${wallH})`
    else if (this.state.boardstate[i]===2) return `url(${wallV})`
    else if (this.state.boardstate[i]===3) return `url(${ULCorner})`
    else if (this.state.boardstate[i]===4) return `url(${URCorner})`
    else if (this.state.boardstate[i]===5) return `url(${LLCorner})`
    else if (this.state.boardstate[i]===6) return `url(${LRCorner})`
    else if (this.state.boardstate[i]===10) return `url(${portal})`
        
    
    // floor 
    else if (this.state.boardstate[i]===0) return `url(${floor01})`

    
  }

  heroMove = (e) =>{
    if (e.key === 'ArrowRight' && this.state.heroPos === 543 && this.state.boardstate[this.state.heroPos+1]===10) {
      this.setState({boardstate: boardArray04, heroPos: 31, dungeon:4})
    }
    if (e.key === 'ArrowLeft' && this.state.heroPos ===311 && this.state.boardstate[this.state.heroPos-1]===10) {
      this.setState({boardstate: boardArray03, heroPos: 310, dungeon:3})
    }
    if (e.key === 'ArrowRight' && this.state.heroPos===208 && this.state.boardstate[this.state.heroPos+1]===10) {
      this.setState({boardstate: boardArray02, heroPos: 180, dungeon:2})
    }
    if (e.key === 'ArrowUp' && this.state.heroPos-30>=0 && (this.state.boardstate[this.state.heroPos-30]===0)) {
      this.setState({heroPos: this.state.heroPos-30})
    }
    if (e.key === 'ArrowRight' && this.state.heroPos+1<=599 && this.state.boardstate[this.state.heroPos+1]===0) {
      this.setState({heroPos: this.state.heroPos+1})
    }
    if (e.key === 'ArrowLeft' && this.state.heroPos-1>=0 && this.state.boardstate[this.state.heroPos-1]===0) {
      this.setState({heroPos: this.state.heroPos-1})
    }
    if (e.key === 'ArrowDown' && this.state.heroPos+30<=599 && this.state.boardstate[this.state.heroPos+30]===0) {
      this.setState({heroPos: this.state.heroPos+30})
    }
    
   

  }

  boardElement(cell){
    if(cell===0) return '#222'
  }


  render(){
       
    return( 



      <div className="maincontainer row">


      
      <div className="col-md-8">

          {/* return the gaming map */}
          <div className="gamemap">
             {
              this.state.boardstate.map((cell,i)=>{
              return(
                <div style={{backgroundImage: this.heroPos(i) }} className="square" value={cell} key={i}></div>
              )
              })
            }
          
          </div>
      </div>
      
      <div className="col-md-4">
        <h2 className="h2title">Player's Status</h2> 
        <h3 className="h3title">DUNGEON: {this.state.dungeon} | LEVEL: {this.state.level}</h3>
        <h3 className="h3title">Healt: +100</h3>
        <h3 className="h3title">Weapon: Fists(+3)</h3>
        <h3 className="h3title">Hero Position: {this.state.heroPos}</h3>
        <h2 className="h2title">Legend</h2>
        <h3 className="h3title"><img className="iconsize" src={portal} alt="portal icon" /> Teleport to Next Dungeon</h3>
        <h2 className="h2title">Sound Track</h2>

        <iframe src="https://open.spotify.com/embed/track/0placGA69DMyS8NvaFe7Es" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>

    
      </div>
           
      </div>
    )
  }
}

export default GameMap;