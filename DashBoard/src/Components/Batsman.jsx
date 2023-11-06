import React ,{useState}from 'react'
import Strikerate from './batsman/strikerate'
import stats from './batsman/json/batsman.json'


function Batsman() {
  const [players, setPlayers] = useState(stats);
  const [isplayer,setisPlayer]=useState(false)
  const[userPlayer,setUserPlayer]=useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [playername,setPlayerName] = useState('');

  const handleKeyPress = () => {
    
    const foundPlayer = players.find(
      (player) => player.name === searchTerm.toLowerCase()
    )
    
    
    const obj =foundPlayer? true : false;
      setisPlayer(true);
      
    
    if (obj) {
      setUserPlayer(foundPlayer.id);
      setPlayerName(foundPlayer.name)
    }
    else{ 
      setisPlayer(false);
      setPlayerName("Player Not Found")

    }
  };

  return (
    <div>
          
      <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)} 
      />
      <button onClick={handleKeyPress}>search</button>
    </div>
      
      {
        (isplayer?
        (
          <div style={{width:'100%'}}>
            <h1>{playername}</h1>
          
          <Strikerate  userPlayer={userPlayer} playername={playername} isplayer={true} />
          <Strikerate  userPlayer={userPlayer} playername={playername} isplayer={true} />
          </div>
            
        ):
        (
          <h1>{playername}</h1>
        )
        )
      }
     

    </div>
  )
}

export default Batsman

