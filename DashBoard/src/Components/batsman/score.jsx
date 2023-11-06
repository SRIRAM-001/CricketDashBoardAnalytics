import React, { useState ,useEffect} from 'react'
import stats from './json/batsman.json'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'



function Strikerate() {
  const [players, setPlayers] = useState(stats);
  const [isplayer,setisPlayer]=useState(false)
  const[userPlayer,setUserPlayer]=useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [playername,setPlayerName] = useState('');
  const [t20Stats,sett20Stats]=useState({});
  const [odiStats,setodiStats]=useState({});
  const [testStats,settestStats]=useState({});
  
  


  useEffect(() => {
    sett20Stats({
      labels:stats[0].strikerate.map(info=>info.id),
    datasets:[
      {
        label:"T20 strike rate",
        data:stats[userPlayer].strikerate.map(info=>info['t20-strike-rate']),
       backgroundColor:('black'),
       color:('red')
        
      }
    ]
    })
    
    
    
  },[userPlayer]);
  useEffect(() => {
    setodiStats({
      labels:stats[0].strikerate.map(info=>info.id),
    datasets:[
      {
        label:"odi strike rate",
        data:stats[userPlayer].strikerate.map(info=>info['odi-strike-rate']),
       backgroundColor:('black'),
       color:('red')
        
      }
    ]
    })
    
    
    
  },[userPlayer]);
  useEffect(() => {
    settestStats({
      labels:stats[0].strikerate.map(info=>info.id),
    datasets:[
      {
        label:"test strike rate",
        data:stats[userPlayer].strikerate.map(info=>info['test-strike-rate']),
       backgroundColor:('black'),
       color:('red')
        
      }
    ]
    })
    
    
    
  },[userPlayer]);
  
 
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
        isplayer?
        (
          <>
          <h1>Batsman:{playername}</h1>
          <div style={{display:'flex',justifyContent:'center',backgroundColor:'pink',color:'red',width:"100%"}}>
          <div style={{height:'500px',width:'500px'}}>
            <Bar data={t20Stats} options={{}} />
          </div>
          <div style={{height:'500px',width:'500px'}}>
            <Bar data={odiStats} options={{}} />
          </div>
          <div style={{height:'500px',width:'500px'}}>
            <Bar data={testStats} options={{}} />
          </div>
        </div>
        </>    
        ):
        (
          <h1>{playername}</h1>
        )
      }
    </div>
    
  )
}

export default Strikerate