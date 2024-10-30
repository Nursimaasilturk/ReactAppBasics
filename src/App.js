import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import InputExample from './components/InputExample';
import LifeCycle from './components/LifeCycle';
import State from './components/State';
function App(){
  // const todos =[
  //   {
  //     id:1,
  //     description:'Do Grocery Shopping'
  //   },
  //   {
  //     id:2,
  //     description:'Complete the Project'
  //   },
  //   {
  //     id:3,
  //     description:'Check Emails'
  //   },
  //   {
  //     id:4,
  //     description:'Exercise'
  //   }
  // ]
  const [isVisible,setIsVisible] = useState(true);
  return(
    <>
    {/* <User  age={'24'} isLoggedIn={true} address={{title:'Bursa',zipCode:16000}}/>
    <Todo todos={todos} /> */}
    {}
    {isVisible && <LifeCycle />}
    <br/>
    <button className='counter-btn dec' onClick={()=> setIsVisible(!isVisible)}>Toggle</button>
    </>
  );
}

export default App;