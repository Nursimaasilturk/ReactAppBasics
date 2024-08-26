import './App.css';
import Header from './components/header';
function App(){
  const name = "Sima"
  const isLogged =true;
  return(
    <>
    <h1>{ isLogged && `Selam ${name}`}</h1>
    <h1>{ isLogged ? 'Tanımlı değil': `Selam ${name}`}</h1>
    </>
  );
}

export default App;