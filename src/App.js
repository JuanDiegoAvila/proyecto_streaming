import './App.css';
import TitleBar from './components/TitleBar'
import Body from './components/Body'

import {useState} from 'react'

function App() {

  const [modal, setModal] =  useState(false)

  return (
    <div className="App">
      <TitleBar name={"Carla"} subscription={"PREMIUM"} setModal= {setModal}/>
      <Body name={"Carla"} modal={modal} setModal= {setModal}/>
    </div>
  );
}

export default App;
