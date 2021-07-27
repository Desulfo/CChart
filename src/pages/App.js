import React, { useState } from 'react';

import './App.css';
import Form from '../molecules/From'

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
    </>
  );
}

export default App;
