import './App.css';
import TitleBar from './components/TitleBar'
import Body from './components/Body'

function App() {
  return (
    <div className="App">
      <TitleBar name={"Carla"} subscription={"PREMIUM"}/>
      <Body/>
    </div>
  );
}

export default App;
