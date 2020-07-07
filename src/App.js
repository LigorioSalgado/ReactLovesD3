import React, {useEffect,useState} from 'react';
import axios  from 'axios';
import './App.css';
import Graph from './Graph';

function App() {

  const [ships,setShips] = useState([]);

  useEffect(() => {

    axios.get('https://swapi.dev/api/people/?page=2')
    .then(({data}) => {
      setShips(data.results)
    })

  },[])

  return (
    <div className="App">
      <Graph data={ships}/>
    </div>
  );
}

export default App;
