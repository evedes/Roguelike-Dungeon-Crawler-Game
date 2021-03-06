// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imports needed for the GameMap
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import React from 'react'
import keydown from 'react-keydown'
import './GameMap.css'


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Imports of Images needed for the Game
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import heroImg from './img/hero.png'
import deadhero from './img/deadhero.png'
import necromancer from './img/necromancer.png'
import fog from './img/fog.png'

import floor01 from './img/floor01.png'
import floor02 from './img/floor02.png'
import floor03 from './img/floor03.png'
import floor04 from './img/floor04.png'

import wallH from './img/wall_h.png'
import wallV from './img/wall_v.png'
import LRCorner from './img/lower_right_corner.png'
import LLCorner from './img/lower_left_corner.png'
import ULCorner from './img/upper_left_corner.png'
import URCorner from './img/upper_right_corner.png'
import portal from './img/portal.png'

import sword from './img/sword.png'
import sword_hand from './img/sword_hand.png'
import axe from './img/axe.png'
import axe_hand from './img/axe_hand.png'
import trident from './img/trident.png'
import trident_hand from './img/trident_hand.png'


import healthpotion from './img/healthpotion.png'
import gold from './img/gold.png'

import monster01 from './img/monster01.png'
import monster02 from './img/monster02.png'
import monster03 from './img/monster03.png'
import monster04 from './img/monster04.png'


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Auxiliary Functions
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Random Position Generator

let genPos = () =>{
  return Number(Math.floor(Math.random()*599));
  }

let genAttack = (dungeon)=>{
  return Number((dungeon)*Math.floor(Math.random()*5)+1)
}




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Initialize Game Map Definitions                                                         +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Map Codes / Legend
// -1 - Gold
// -2 - Health Bottles
//  0 - Empty Cell / Floor / Pavement Tile
//  1 - Horizontal Wall
//  2 - Vertical Wall
//  3 - Upper Left Corner
//  4 - Upper Right Corner
//  5 - Bottom Left Corner
//  6 - Bottom Right Corner
// 10 - Portal Icon
// 15 - Monster 01
// 16 - Monster 02
// 17 - Monster 03
// 18 - Monster 04
// 20 - Necromancer                                                                        +
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MAPS DESIGN (boardArray01[], boardArray02[], boardArray03[], boardArray04[])
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// MAP 01
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

    let genMobs1 = ()=>{
          // Fulfill the board with Gold Coins 
          for (let x = 0 ; x < 15 ; x++){
              let genGold = genPos();
              if (boardArray01[genGold]===0){
                  boardArray01[genGold]=-1
              }
              else x--;
          }
      
          // Fulfill the board with Health Bottles
          for (let x = 0 ; x < 10 ; x++){
              let genHealth = genPos();
              if (boardArray01[genHealth]===0){
                boardArray01[genHealth]=-2
              }
              else x--;
          }
      
          // Fulfill the board with Sword 
          for (let x = 0 ; x < 3 ; x++){
              let genSword = genPos();
              if (boardArray01[genSword]===0){
                  boardArray01[genSword]=-15
              }
              else x--;
          }
      
          // Fulfill the game with monsters01
          for (let x = 0 ; x < 10; x++){
              let genMonster01= genPos();
              if (boardArray01[genMonster01]===0){
                  boardArray01[genMonster01]=15
              }
              else x--;
          }
        }
      


    //
  
// MAP 02
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



    let genMobs2 = () =>{
        // Fulfill the game with gold
        for (let x = 0 ; x < 10 ; x++){
            let genGold = genPos();
            if (boardArray02[genGold]===0){
                boardArray02[genGold]=-1
            }
            else x--;
        }

        // Fulfill the game with health bottles
        for (let x = 0 ; x < 10 ; x++){
            let genHealth = genPos();
            if (boardArray02[genHealth]===0){
                boardArray02[genHealth]=-2
            }
            else x--;
        }

        // Fulfill the board with Axe 
        for (let x = 0 ; x < 2 ; x++){
            let genAxe = genPos();
            if (boardArray02[genAxe]===0){
                boardArray02[genAxe]=-16
            }
            else x--;
        }

        // Fulfill the game with monsters02
        for (let x = 0 ; x < 12 ; x++){
            let genMonster02= genPos();
            if (boardArray02[genMonster02]===0){
                boardArray02[genMonster02]=16
            }
            else x--;
        }
    }


//

//MAP 03
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

      let genMobs3  = () => {
          // Fulfill the game with gold
          for (let x = 0 ; x < 10 ; x++){
              let genGold = genPos();
              if (boardArray03[genGold]===0){
                  boardArray03[genGold]=-1;
              }
              else x--
          }

          // Fulfill the game with health bottles
          for (let x = 0 ; x < 10; x++){
              let genHealth = genPos();
              if (boardArray03[genHealth]===0){
                  boardArray03[genHealth]=-2;
              }
              else x--
          }


          // Fulfill the game with monsters03
          for (let x = 0 ; x < 12; x++){
              let genMonster03 = genPos();
              if (boardArray03[genMonster03]===0){
                  boardArray03[genMonster03]=17;
              }
              else x--
          }
      }
//

//MAP 04
let boardArray04 = []

    for (let i = 0 ; i < 600; i++){
        boardArray04[i]=0
    }

    //Corners
    boardArray04[0]=3
    boardArray04[29]=4
    boardArray04[570]=5
    boardArray04[599]=6
      
    //Necromancer
    boardArray04[234]=20

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

      let genMobs4 = () =>{
      // Fulfill the board with gold
          for (let x = 0 ; x < 10; x++){
            let genGold = genPos();
            if (boardArray04[genGold]===0){
              boardArray04[genGold]=-1;
            }
            else x--;
          }

          //Fulfill the board with health bottles
          for (let x = 0 ; x < 10; x++){
            let genHealth = genPos();
            if (boardArray04[genHealth]===0){
              boardArray04[genHealth]=-2;
            }
            else x--;
          }

          // Fulfill the board with Trident 
          for (let x = 0 ; x < 2; x++){
              let genTrident = genPos();
              if (boardArray04[genTrident]===0){
                  boardArray04[genTrident]=-17
              }
              else x--;
          }

          // Fulfill the game with monsters04
          for (let x = 0 ; x < 12; x++){
              let genMonster04 = genPos();
              if (boardArray04[genMonster04]===0){
                  boardArray04[genMonster04]=18;
              }
              else x--;
          }
      }

//


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Set Initial State 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function initialState() {
  return(
  {
    boardstate: boardArray01,
    mobs1: genMobs1(),
    mobs2: genMobs2(),
    mobs3: genMobs3(),
    mobs4: genMobs4(),
    count: 5,
    heroPos: 513,
    floor: floor01,
    dungeon: 1,
    dungeontitle: 'The Skeleton Army',
    gold: 0,
    health: -1000,
    weapon: 1,
    weapontype: 'fists(+3)',
    boss: 1,
    honorpoints: 0,
    fog: 1,
  })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// GAME MAP/GENERAL CLASS
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


  handleStart = () =>{
    this.setState({...initialState()})
    this.setState({health: 20})
  }


  handleMainMenu = () => {
    this.setState({...initialState()})
    this.setState({health: -1000})
  }

  handleFog = () => {
    if (this.state.fog===1) {this.setState({fog: 0})}
    else {this.setState({fog: 1})}
  }
  
  heroPos = (i) => {
    
    // Hero Position while Alive
    if(i===this.state.heroPos && this.state.health >0 && this.state.weapon===1){
        return `url(${heroImg}),url(${this.state.floor})`   
      }

    else if(i===this.state.heroPos && this.state.health >0 && this.state.weapon===2){   
        return `url(${sword_hand}),url(${heroImg}),url(${this.state.floor})`    
      }

    else if(i===this.state.heroPos && this.state.health >0 && this.state.weapon===3){      
        return `url(${axe_hand}),url(${heroImg}),url(${this.state.floor})`   
      }

    else if(i===this.state.heroPos && this.state.health >0 && this.state.weapon===4){        
        return `url(${trident_hand}),url(${heroImg}),url(${this.state.floor})`   
      }
   
    else if(!( i===this.state.heroPos-30-3 || i===this.state.heroPos-30-2 || i===this.state.heroPos-30-1 || i===this.state.heroPos-30 || i===this.state.heroPos-30+1 || i===this.state.heroPos-30+2 || i===this.state.heroPos-30+3 || i===this.state.heroPos-3 || i===this.state.heroPos-2 || i===this.state.heroPos-1 || i===this.state.heroPos+1 || i===this.state.heroPos+2 || i===this.state.heroPos+3 || i===this.state.heroPos+30-3 || i===this.state.heroPos+30-2 || i===this.state.heroPos+30-1 || i===this.state.heroPos+30 || i===this.state.heroPos+30+1 || i===this.state.heroPos+30+2 || i===this.state.heroPos+30+3 || i===this.state.heroPos-60-1 || i===this.state.heroPos-60 || i===this.state.heroPos-60+1 || i===this.state.heroPos+60-1 || i===this.state.heroPos+60 || i===this.state.heroPos+60+1) && this.state.fog===1  ){
        return `url(${fog})`
    
  }
    
    else if (this.state.boardstate[i]===1) return `url(${wallH})` 
    else if (this.state.boardstate[i]===2) return `url(${wallV})` 
    else if (this.state.boardstate[i]===3) return `url(${ULCorner})`
    else if (this.state.boardstate[i]===4) return `url(${URCorner})`
    else if (this.state.boardstate[i]===5) return `url(${LLCorner})`
    else if (this.state.boardstate[i]===6) return `url(${LRCorner})`
    else if (this.state.boardstate[i]===10) return `url(${portal})`
    else if (this.state.boardstate[i]===-1) return `url(${gold}),url(${this.state.floor})`  
    else if (this.state.boardstate[i]===-2) return `url(${healthpotion}),url(${this.state.floor})`  
    else if (this.state.boardstate[i]===20) return `url(${necromancer}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===15) return `url(${monster01}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===16) return `url(${monster02}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===17) return `url(${monster03}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===18) return `url(${monster04}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===-100) return `url(${deadhero}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===0) return `url(${this.state.floor})`
    else if (this.state.boardstate[i]===-15) return `url(${sword}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===-16) return `url(${axe}),url(${this.state.floor})`
    else if (this.state.boardstate[i]===-17) return `url(${trident}),url(${this.state.floor})`
    
}

  heroMove = (e) =>{

    // PORTAL PASSAGES
      if (e.key === 'ArrowRight' && this.state.heroPos === 543 && this.state.boardstate[this.state.heroPos+1]===10) {
        this.setState({boardstate: boardArray04, floor: floor04,  heroPos: 31, dungeon:4, dungeontitle: 'The Infernal Bats'})
      }
      if (e.key === 'ArrowLeft' && this.state.heroPos ===311 && this.state.boardstate[this.state.heroPos-1]===10) {
        this.setState({boardstate: boardArray03, floor: floor03, heroPos: 310, dungeon:3, dungeontitle:'Tutankhamun Mummies'})
      }
      if (e.key === 'ArrowRight' && this.state.heroPos===208 && this.state.boardstate[this.state.heroPos+1]===10) {
        this.setState({boardstate: boardArray02, floor: floor02, heroPos: 180, dungeon:2, dungeontitle: 'The Vampire Legion'})
      }
    //

    //GOLD COLLECT

      if(e.key && this.state.boardstate[this.state.heroPos]===-1){
        this.setState({gold: this.state.gold+this.state.dungeon*10})
        if(this.state.dungeon===1){boardArray01[this.state.heroPos]=0}
        else if(this.state.dungeon===2){boardArray02[this.state.heroPos]=0}
        else if(this.state.dungeon===3){boardArray03[this.state.heroPos]=0}
        else boardArray04[this.state.heroPos]=0
      }
    //

    //HEALTH COLLECT

      if(e.key && this.state.boardstate[this.state.heroPos]===-2){
        this.setState({health: this.state.health+this.state.dungeon*10})
          if(this.state.dungeon===1){boardArray01[this.state.heroPos]=0}
          else if(this.state.dungeon===2){boardArray02[this.state.heroPos]=0}
          else if(this.state.dungeon===3){boardArray03[this.state.heroPos]=0}
          else boardArray04[this.state.heroPos]=0
      }
    //

    //WEAPON COLLECT

        //SWORD
        if(e.key && this.state.boardstate[this.state.heroPos]===-15){
          this.setState({weapon: 2, weapontype: 'sword(+8)', count: 4})
            if(this.state.dungeon===1){boardArray01[this.state.heroPos]=0}
            else if(this.state.dungeon===2){boardArray02[this.state.heroPos]=0}
            else if(this.state.dungeon===3){boardArray03[this.state.heroPos]=0}
            else boardArray04[this.state.heroPos]=0
        }

        //AXE
        if(e.key && this.state.boardstate[this.state.heroPos]===-16){
          this.setState({weapon: 3, weapontype: 'axe(+16)', count: 3})
            if(this.state.dungeon===1){boardArray01[this.state.heroPos]=0}
            else if(this.state.dungeon===2){boardArray02[this.state.heroPos]=0}
            else if(this.state.dungeon===3){boardArray03[this.state.heroPos]=0}
            else boardArray04[this.state.heroPos]=0
        }        
        
        //TRIDENT
        if(e.key && this.state.boardstate[this.state.heroPos]===-17){
          this.setState({weapon: 4, weapontype: 'trident(+32)', count: 2})
            if(this.state.dungeon===1){boardArray01[this.state.heroPos]=0}
            else if(this.state.dungeon===2){boardArray02[this.state.heroPos]=0}
            else if(this.state.dungeon===3){boardArray03[this.state.heroPos]=0}
            else boardArray04[this.state.heroPos]=0
        }
    //

    //MONSTER TYPE 01 FIGHT
        // Monster Image === 15
        // boardArray01
        // Kill -> +100 Gold
        
        if(e.key === 'ArrowRight' && this.state.boardstate[this.state.heroPos+1]===15){
          let honorpoints =  this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray01[this.state.heroPos+1]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+100, honorpoints: honorpoints+=10})
              }
        }
        if(e.key === 'ArrowLeft' && this.state.boardstate[this.state.heroPos-1]===15){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})          
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray01[this.state.heroPos-1]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+100, honorpoints: honorpoints+=10})
              }
        }
        if(e.key === 'ArrowDown' && this.state.boardstate[this.state.heroPos+30]===15){
          let honorpoints =  this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray01[this.state.heroPos+30]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+100, honorpoints: honorpoints+=10})
              }
        }
        if(e.key === 'ArrowUp' && this.state.boardstate[this.state.heroPos-30]===15){
          let honorpoints= this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray01[this.state.heroPos-30]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+100, honorpoints: honorpoints+=10})
              }
        }
    //   
    
    //MONSTER TYPE 02 FIGHT
        // Monster Image === 16
        // boardArray02
        // Kill -> +200 Gold
          
        if(e.key === 'ArrowRight' && this.state.boardstate[this.state.heroPos+1]===16){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray02[this.state.heroPos+1]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+200, honorpoints: honorpoints+=20})
              }
        }
        if(e.key === 'ArrowLeft' && this.state.boardstate[this.state.heroPos-1]===16){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})          
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray02[this.state.heroPos-1]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+200, honorpoints: honorpoints+=20})
              }
        }
        if(e.key === 'ArrowDown' && this.state.boardstate[this.state.heroPos+30]===16){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray02[this.state.heroPos+30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+200, honorpoints: honorpoints+=20})
              }
        }
        if(e.key === 'ArrowUp' && this.state.boardstate[this.state.heroPos-30]===16){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray02[this.state.heroPos-30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+200, honorpoints: honorpoints+=20})
              }
        }
    //   

    //MONSTER TYPE 03 FIGHT
        // Monster Image === 17
        // boardArray03
        // Kill -> +300 Gold
          
        if(e.key === 'ArrowRight' && this.state.boardstate[this.state.heroPos+1]===17){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray03[this.state.heroPos+1]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+300, honorpoints: honorpoints+=30})
              }
        }
        if(e.key === 'ArrowLeft' && this.state.boardstate[this.state.heroPos-1]===17){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})          
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray03[this.state.heroPos-1]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+300, honorpoints: honorpoints+=30})
              }
        }
        if(e.key === 'ArrowDown' && this.state.boardstate[this.state.heroPos+30]===17){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray03[this.state.heroPos+30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+300, honorpoints: honorpoints+=30})
              }
        }
        if(e.key === 'ArrowUp' && this.state.boardstate[this.state.heroPos-30]===17){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray03[this.state.heroPos-30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+300, honorpoints: honorpoints+=30})
              }
        }
    //  

    //MONSTER TYPE 04 FIGHT
        // Monster Image === 18
        // boardArray04
        // Kill -> +400 Gold
          
        if(e.key === 'ArrowRight' && this.state.boardstate[this.state.heroPos+1]===18){
          let honorpoints = this.state.honorpoints;
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos+1]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+400, honorpoints: honorpoints+=40})
              }
        }
        if(e.key === 'ArrowLeft' && this.state.boardstate[this.state.heroPos-1]===18){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})          
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos-1]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+400, honorpoints: honorpoints+=40})
              }
        }
        if(e.key === 'ArrowDown' && this.state.boardstate[this.state.heroPos+30]===18){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos+30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+400, honorpoints: honorpoints+=40})
              }
        }
        if(e.key === 'ArrowUp' && this.state.boardstate[this.state.heroPos-30]===18){
          let honorpoints = this.state.honorpoints
          let count = this.state.count;
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos-30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+400, honorpoints: honorpoints+=40})
              }
        }
    //  

    //MONSTER - BOSS NECROMANCER
        // Monster Image === 20
        // boardArray04
        // Kill -> +1000 Gold
          
        if(e.key === 'ArrowRight' && this.state.boardstate[this.state.heroPos+1]===20){
          let honorpoints = this.state.honorpoints;
          let count = this.state.count
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)*70})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos+1]=0
                this.setState({count: 6-this.state.weapon, gold: this.state.gold+1000, boss:0, honorpoints: honorpoints+=1000})
              }
        }
        if(e.key === 'ArrowLeft' && this.state.boardstate[this.state.heroPos-1]===20){
          let honorpoints = this.state.honorpoints;    
          let count = this.state.count    
          this.setState({count: count-=1})          
          this.setState({health: this.state.health-genAttack(this.state.dungeon)*70})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos-1]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+1000, boss:0, honorpoints: honorpoints+=1000 })
              }
        }
        if(e.key === 'ArrowDown' && this.state.boardstate[this.state.heroPos+30]===20){
          let honorpoints = this.state.honorpoints
          let count = this.state.count
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)*70})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos+30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+1000, boss:0, honorpoints: honorpoints+=1000})
              }
        }
        if(e.key === 'ArrowUp' && this.state.boardstate[this.state.heroPos-30]===20){
          let honorpoints = this.state.honorpoints       
          let count = this.state.count
          this.setState({count: count-=1})
          this.setState({health: this.state.health-genAttack(this.state.dungeon)*70})
          
              if(this.state.count===0){
                boardArray04[this.state.heroPos-30]=0
                this.setState({count: 6-this.state.weapon,gold: this.state.gold+1000, boss:0, honorpoints: honorpoints+=1000})
              }
        }
    //  



    //HERO MOVES

        if (e.key === 'ArrowUp' && this.state.boardstate[this.state.heroPos-30] <= 0) {
          this.setState({heroPos: this.state.heroPos-30}) 
        }
        if (e.key === 'ArrowRight' && this.state.heroPos+1<=599 && this.state.boardstate[this.state.heroPos+1]<=0) {
          this.setState({heroPos: this.state.heroPos+1})
        }
        if (e.key === 'ArrowLeft' && this.state.heroPos-1>=0 && this.state.boardstate[this.state.heroPos-1]<=0) {
          this.setState({heroPos: this.state.heroPos-1})
        }
        if (e.key === 'ArrowDown' && this.state.heroPos+30<=599 && this.state.boardstate[this.state.heroPos+30]<=0) {
          this.setState({heroPos: this.state.heroPos+30})
        }   

         } // heroMove function END
    //


  // RENDER Function 
  render(){ 
    if(this.state.health>0 && this.state.boss===1){ 
      //GAME BOARD
      return(
      
      <div className="maincontainer row">
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
              
              <h3 className="h3title">DUNGEON: {this.state.dungeon} {this.state.dungeontitle}<button className="btn btn-danger btn-xs" onClick={this.handleFog}>TOGGLE FOG OF WAR</button> <br /> | Health: {this.state.health} | Honor Points: +{this.state.honorpoints} | Gold: + {this.state.gold} | Weapon: {this.state.weapontype} | Hero Position: {this.state.heroPos} | Count: {this.state.count}</h3>
      </div>)
    }
    else if (this.state.health >0 && this.state.boss===0){
      return(
      <div className="maincontainer row">
              <div className="menumap">
                  <h2 className="h2headertitle">ROGUELIKE DUNGEON CRAWLER GAME</h2>
                  <h2 className="h2title">YOU WON THE GAME!!!! HURRAY!</h2>
                  <h3 className="h3title">| Health: {this.state.health} | Honor Points: +{this.state.honorpoints} | Gold: + {this.state.gold} | Weapon: {this.state.weapontype} |</h3>
                  <button className="btn btn-danger" onClick={this.handleMainMenu}>MAIN MENU</button>
                  <h2 className="h2title">Finally...</h2>
                  <h5 className="h5title">You've saved your sweet-heart's life.
                                          Lord Herald came back to it's normal state and apologized you for his evil treats! 
                                          You've became the hero of the kingdom and....<br />You lived with you're princess happily ever after!</h5>
              </div>

      </div>
      )
    }
    // MAIN MENU 
    else if (this.state.health===-1000 && this.state.boss === 1) {
      return(
      <div className="maincontainer row">
              <div className="menumap">
                  <h2 className="h2headertitle">ROGUELIKE DUNGEON CRAWLER GAME</h2>
                  <h2 className="h2title">Story</h2>
                  <h5 className="h5title">Welcome to the realm of Lord Herald, the Necromancer!<br /> Lord Herald was once possessed by a demoniac spirit which darkened his soul and transformed his heart into a rock. You are the hero of this game and you need to save your damsel-in-distress. Lord Herald prepares to slay her and summon her soul, enchanting her dead body to praise the evil forces in order to strengthen himself and rule the world! Hurry up! Kill Herald and save your princess!</h5>
                  <button className="btn btn-danger" onClick={this.handleStart}>START GAME</button>
                  <h2 className="h2title">Instructions</h2>
                  <h5 className="h5title">Using weapons reduces the number of times you need to hit a mob in order to kill him. Potions give you health. Killing mobs adds honor points and gold to your purse. Honor Points turn you a kingdom's legend! Use the arrow keys to fight your way till Lord Herald, the Boss in Dungeon 4! <br />Good Luck fellow stranger!</h5>
              </div>
              <h3 className="h3title">Thank you very much, <a href="http://jessefreeman.com/" target="_blank" rel="noopener noreferrer">Jesse Freeman</a>, for the graphics!</h3>
              <h3 className="h3title">I'm <a href="http://evedes.me" target="_blank" rel="noopener noreferrer">EVEDES.ME</a> and I'm a Free Stack Dev Self-taugh in <a href="http://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></h3>

      </div>
      )
    }
    // GAME OVER
    else{
      return(
      <div className="maincontainer row">
               <div className="menumap">
                  <h2 className="h2headertitle">ROGUELIKE DUNGEON CRAWLER GAME</h2>
                  <h2 className="h2title">GAME OVER!!!</h2>
                  <button className="btn btn-danger" onClick={this.handleStart}>RESTART GAME</button>
                  <button className="btn btn-danger" onClick={this.handleMainMenu}>MAIN MENU</button>
              </div>
      </div>
      )
    }
    
    
  } // end of render function 
} // end of Class

export default GameMap;