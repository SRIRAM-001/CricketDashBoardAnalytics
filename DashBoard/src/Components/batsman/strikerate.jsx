import React, { useState ,useEffect} from 'react'
import stats from './json/batsman.json'
import '../Home.css'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'



function Strikerate({userPlayer,playername,isplayer}) {
  const [userindex,setIndex] = useState(-1)
  const [t20Stats,sett20Stats]=useState({
    labels:stats[0].strikerate.map(info=>info.id),
    datasets:[
      {
        label:"T20 strike rate",
        data:stats[userPlayer].strikerate.map(info=>info['t20-strike-rate']),
       backgroundColor:('black'),
       color:('red')
        
      }
    ]

  });
  const [odiStats,setodiStats]=useState({
    labels:stats[0].strikerate.map(info=>info.id),
    datasets:[
      {
        label:"odi strike rate",
        data:stats[userPlayer].strikerate.map(info=>info['odi-strike-rate']),
       backgroundColor:('black'),
       color:('red')
        
      }
    ]

  });
  const [testStats,settestStats]=useState({
    labels:stats[0].strikerate.map(info=>info.id),
    datasets:[
      {
        label:"test strike rate",
        data:stats[userPlayer].strikerate.map(info=>info['test-strike-rate']),
       backgroundColor:('black'),
       color:('red')
        
      }
    ]

  });
  
  


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
 
    
    
    
 
 

  
  

  
 

    

  return (
  
      <div>
       
        {
            
        (isplayer?(
            // <h1> playername:{isPlayer} stats[0].strikerate.map(info=>info.id){stats[userPlayer].strikerate.map(info=>info['test-strike-rate'])}</h1>
        
       
        
        
          <>
          
          
          <h1> playername:{isplayer} </h1>
          <h1>Batsman:{playername}</h1>
          
          
          
          <div className='bar' style={{display:'flex',backgroundColor:'pink',color:'red',gap:'10px',padding:'10px',height:'200px'}}>
          <div style={{height:'400px', width:'33.3%'}}>
            <Bar data={t20Stats} options={{}} />
          </div>
          <div style={{height:'500px',width:'33.3%'}}>
            <Bar data={odiStats} options={{}} />
          </div>
          <div style={{height:'500px',width:'33.3%'}}>
            <Bar data={testStats} options={{}} />
          </div>
        </div>
        
        </>   
        ):
        (
            <h1>hii</h1>
        ))
     }
       
        </div>
      
    
    
  )
}

export default Strikerate