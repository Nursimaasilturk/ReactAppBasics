import './App.css';
import Counter from './components/Counter';
import InputExample from './components/InputExample';
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
  return(
    <>
    {/* <User  age={'24'} isLoggedIn={true} address={{title:'Bursa',zipCode:16000}}/>
    <Todo todos={todos} /> */}
    <InputExample />
    </>
  );
}

export default App;