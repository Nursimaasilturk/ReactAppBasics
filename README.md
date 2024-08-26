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