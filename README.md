# React Basics
## What is the React ?
React is a JavaScript library used for building user interfaces. React divides the site into components, and if there's an update in a component, it only updates that specific component instead of updating all of them. This approach is efficient because re-rendering the entire page would be costly in terms of DOM performance, so only the relevant area is updated. For example, if the notification count on a notification icon in the user interface increases or decreases, React only updates that specific area, leaving the other areas unchanged.

#### When we use the React ?
If there is a lot of DOM manipulation in the UI, using React would be sensible. For example, in chat applications, there are numerous changes such as notifications, messages, etc. It's clear why this technology was developed by Facebook. :)

#### Differance between Real DOM and Virtual DOM
The Real DOM is a model that organizes all HTML elements, style information, text, and related content on a web page into a tree structure. This model manages the structure and content of the page through browsers and responds to user interactions. The Virtual DOM, on the other hand, is a copy of the Real DOM and is maintained by React as a JavaScript object. When an update is about to occur on the site, React compares the Real DOM with the Virtual DOM, and only the different area/node is written onto the corresponding area/node in the Real DOM. This way, instead of updating the entire page, only the specific area is updated, avoiding unnecessary rendering costs.

## Components
#### Creating new project
When creating our project, we use the npx package tool. The reason for this is that npx allows us to temporarily download and run a package that is not installed globally while executing a command. A React project is created with ***create-react-app***. This setup automatically handles configurations, initial files, and other settings.
```
yarn global add npx
npx create-react-app my-app
```
#### What is the component ?

A component is a building block that makes up a website. It typically represents a single function or part of the user interface and has its own isolated structure. Components accept various inputs and produce specific outputs, which makes the website dynamic. Additionally, they have a modular structure and can be reused repeatedly.
#### JSX Structure
It is a structure within JavaScript that allows us to create user interfaces by writing HTML-like syntax. It is used to define React components.
```js
function Header(){
	return(
		<h2> Header Component </h2>
	);
}
export default Header;
```
In JSX, component names are written with uppercase letters. This is to avoid confusion with HTML tags when using the component.
Basic component structure is like the on above. A function is created with the name of the component, and the content of the component is defined within the return statement. ```export default ComponentName``` is used to allow it to be used by other components.
When calling the component within another component, it is sufficient to write it like an HTML tag. Here, since the Header component does not have any child components, it can be written as ```<Header />```.
```js
function App(){
  const name = "Sima"
  const isLogged =true;
  return(
    <>
	<Header />
	 	<p>{name}<p/>
    	<h1>{ isLogged && `Hi ${name}`}</h1>
    	<h1>{ !isLogged ?  `Hi ${name}` : 'Please Log In!'}</h1>
    </>
  );
}
```
Defining and using variables within a component is similar to Angular; we use curly braces ```{}``` to call and use the defined variables within the JSX.
Additionally, conditional expressions can be made using ternary operators ```? :``` or logical operators like ```&&``` and ```||```.
## Props
In React, the props (properties) structure is a mechanism used to pass data from one component to another. With props, components become dynamic by receiving different data. Props are passed to the component as attributes and can be accessed within the component as a 'props' object.
```js
import './App.css';
import User from "./components/User"
function App(){
  return(
    <>
    <User name="Sima" surname="ASİLTÜRK" age={24} isLoggedIn={true}/>
    </>
  );
}

export default App;
```
```js
function User(props){
	return(
		<>
		<h1>User Information</h1>
		<p>{props.isLoggedIn ? `${props.name} ${props.surname} (${props.age})` : `Please log In!`}</p>
		</>
	);
}
export default User;
```
In the example above, the User component receives four props: ***name***, ***surname***, ***age***, and ***isLoggedIn***. The User component itself takes these ***props*** as parameters under the props object and accesses each property individually within the component. Another way to use props is shown below.
```js
function User({name:isim,surname,age,isLoggedIn}){
	return(
	 <>
	  <h1>User Information</h1>
	  <p>{isLoggedIn ? `${isim} ${surname} (${age})` : `Please log In!`}</p>
	 </>
	);
}
export default User;
```
Props are taken as parameters within an object. While using the same name for the parameter is generally preferred for better code readability, if different naming is required, it can be done in the format propName: paramName
#### Key Prob
In React, the ```key``` prop ensures that each item in a list or group is uniquely identified. Keys help React determine which items have changed, been added, or removed, allowing updates to be performed efficiently. The key prop is typically assigned to items listed by the ```.map()``` function.
```js
import './App.css';
import Todo from './components/Todo';
function App(){
  const todos =[
    {
      id:1,
      description:'Do Grocery Shopping'
    },
    {
      id:2,
      description:'Complete the Project'
    },
    {
      id:3,
      description:'Check Emails'
    },
    {
      id:4,
      description:'Exercise'
    }
  ]
  return(
    <>
    <Todo todos={todos} />
    </>
  );
}

export default App;
```
```js
function Todo({todos}){
  return(
	<>
	<h3>TODO LIST</h3>
	{todos.map(todo => (
		<p key={todo.id}>{todo.description}
		</p>
	) )}
	</>
  )
}
export default Todo;
```
#### Prop Types
PropTypes in React are used to define the types of props a component receives. This structure allows you to clearly specify what types of data the component expects, and it ensures that a warning is given if incorrect data types are provided. First, you need to import this structure into your component. In the component file, we define the types of all the props our component receives using the prop-types tool.
```js
import PropTypes from 'prop-types';
function User({name:isim,surname,age,isLoggedIn,address}){
	return(
		<>
		<h1>User Information</h1>
		<br/>
		{address.title} /{address.zipCode}
		<br/>
		<p>{isLoggedIn ? `${isim} ${surname} (${age})` : `Please log In!`}</p>
		</>
	);
}
User.propTypes = {
  name:PropTypes.string.isRequired,
  surname:PropTypes.string.isRequired,
  age:PropTypes.oneOfType([
	PropTypes.number,
	PropTypes.string
  ]),
  isLoggedIn:PropTypes.bool,
  address:PropTypes.shape({
	title:PropTypes.string,
	zipCode:PropTypes.number
})
}
User.defaultProps = {
	name:'NAME',
	surname:'SURNAME'
}
export default User;
```
* ***isRequired:*** Makes the prop required.
* ***oneOfType:*** Allows multiple types to be assigned to the prop.
* ***shape:*** Used to define the types of properties within an object when sending a prop of object type.
* ***Default Props:*** Used to define default values for props when no value is provided.

## State
A JS object that holds all the data within our components that has the potential to change. Any data in a component that has the potential to change at any point is defined as state. It holds the component’s own dynamic data, meaning the variables get updated.
In functional components, state is defined using **useState()** hook. 
```js 
import {useState} from "react"
function State(){
	const [name,setName] = useState('Sima');
	return(
		<>
		 <h1>State Component</h1>
		 <p>{name}</p>
		 <button onClick={()=> {setName('Nursima')}} >Change Name and Age *!</button>
		</>
	)
}
export default State
```

Our variable is defined inside ‘**[ ]**’. Here, name is the name of the variable, and the variable is updated using the setName function. We perform the update operation with the useState() hook. A default value can be provided or it can be left empty as well.

### Array States
```js
import {useState} from "react"
function State(){
	const [fruits,setFruits] = useState(["apple","watermelon","lemon"]);
	return(
		<>
		 {fruits.map((fruit,key) => 
			<div key={key}>{fruit}</div>
		 )}
		 <button onClick={() => setFruits([...fruits,'peach'])}>Add new fruit !</button>
		</>
	)
}
export default State
```
### Object States

```js
import {useState} from "react"
function State(){
	const [address,setAddress] = useState({city:"Erzurum",province:'Pasinler',zip:25096});
	return(
		<>
		 <h1>State Component</h1>
		 <hr/>
		 <h2>Adress</h2>
		 <p>{address.city}</p>
		 <p>{address.province}</p>
		 <p>{address.zip}</p>
		 <button onClick={()=>setAddress({city:'Bursa',province:'İnegöl',zip:16000})}>Change the address</button>
		 <button onClick={()=>setAddress({...address,province:'Nilüfer',zip:16120})}>Update address</button> 
     // we use spread operator '...address' for keep previous unchanged values
		</>
	)
}
export default State
```
## Input Example
```js
import React, { useState } from 'react'

function InputExample() {
	// const [name,setName] = useState("");
	// const [surname,setSurname] = useState("");
	// const onChangeName =  (event)=>setName(event.target.value);
	// const onChangeSurname = (event)=>setSurname(event.target.value);
	const [form,setForm]=useState({name:'',surname:''});
	const onChangeForm = (event) =>{
		setForm({...form,[event.target.name]:event.target.value})
	}
  return (
	<div>
	  <h1>Input Example</h1>
	  <br/>
	  <div>
		<h3>Name</h3>
		{/* <input value={name} onChange={onChangeName}/> */}
		<input name="name" value={form.name} onChange={onChangeForm} />
	  </div>
	  <div>
		<h3>Surname</h3>
		{/* <input value={surname} onChange={onChangeSurname}/> */}
		<input name="surname" value={form.surname} onChange={onChangeForm} />
	  </div>
	  <br />
	  {/* {name} {surname} */}
	  {form.name} {form.surname}
	</div>
  )
}

export default InputExample
```
[![Watch the video](https://github.com/Nursimaasilturk/ReactAppBasics/blob/master/src/assets/input-example.png)](https://github.com/Nursimaasilturk/ReactAppBasics/blob/master/src/assets/react-input.mp4)



