import React, { useState } from 'react';

import './App.css';
import Form from '../molecules/From'
import Chart from '../molecules/Chart'

function App() {
  const [data, setData] =useState([null, null]);
  let list;
  if(data[0]){
    list=  <ul>
      {data.map(item => <li key={item}>{item}</li>)}
    </ul>
  } 
  return (
    <>
      <h1>Hello</h1>
      <Form setData={setData}/>
      {list}
      <Chart />
    </>
  );
}

export default App;
