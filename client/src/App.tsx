import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    
    })
      .then((res)=>{
        setData(res.data);
        console.log(res.data);
      })
      .catch(function (err: string) {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1>React Typescript Template</h1>
      {data}
    </div>
  )
}

export default App;
