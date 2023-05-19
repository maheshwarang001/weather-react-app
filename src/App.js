import React,{useState} from 'react'
import axios from 'axios'


function App() {

  const [data,setData] = useState()
  const [city, setCity] = useState('mumbai')
  const _key = '64d03bbde6274367b55155631221207'
  const _base = `https://api.weatherapi.com/v1/current.json?q=${city}&key=`+_key

  const searchLocation=(event)=>{

    if(event.key === 'Enter'){
    axios.get(_base).then((Response)=>{
      setData(Response.data)
      console.log(Response.data)
    })
    setCity('')
  }
  }



  return (

  


    <div className='app'>
      {console.log(data)}
    
      <div className='location'>

            <input type="text" 
            value={city}
            onChange={event=>setCity(event.target.value)}
            onKeyPress={searchLocation}    
            />
            
            
          </div>

      <div className='container'>
        <div className='top'>
          <div className=''>
            <p>{data ? data.location.name : null}</p>
          </div>

          <div className='temperature'>
            <h1>{data ? data.current.temp_c + "°": null}</h1>
          </div>

          <div className="desc">
            <p>{data ? data.current.condition.text: null}</p>
            
          </div>

        </div>

        <div className='bottom'>

          <div className="feels">
            <p>{data ? data.current.feelslike_c + "°": null}</p>
            <p className='bold'>Feels like</p>
          </div>

          <div className="humidity">
            <p>{data ? data.current.humidity + '%': null}</p>
            <p className='bold'>Humidity</p>
          </div>

          <div className="wind">
            <p>{data ? data.current.gust_mph + 'mph': null}</p>
            <p className="bold">Wind Speed</p>
          </div>
 

        </div>
      </div>
      
    </div>
   

  );
}

export default App;
