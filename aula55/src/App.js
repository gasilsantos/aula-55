import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './components/CarroClass';
import PersonRegister from './components/PersonRegister';

function App() {
  return (
    <div className="App">
     <HelloWorld name= "filermino" />
     <Car owner="filermino piloto de fuga"/>
     <PersonRegister name= "filermino" age={31} lastname="deres" job="advogado"/>
    </div>
  );
}

export default App;
