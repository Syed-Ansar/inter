
import { useState,useEffect } from 'react';
import Card from './components/Card';

function App() {

  const [data,setData] = useState([]);

const fetchData = async() => {
    let url = "https://randomuser.me/api/?results=5";
    const fetch1 = await fetch(url);
    const res = await fetch1.json();
    setData(res.results);
  }

    useEffect(() => {
     fetchData();
    },[])

  return (
    <div className="App">
      <h1>Javascript</h1>

     {data.map((item,index) => {
       const gender = item.gender;
       const {title,first,last} = item.name;
       const name = `${title} ${first} ${last}`;
       const {thumbnail} = item.picture;
       return(
         <div style={{display:'flex',flexDirection:'row'}}>
           <Card key={index} name = {name} gender={gender} thumbnail={thumbnail}/>
         </div>
       )
     })}
    </div>
  );
}

export default App;
