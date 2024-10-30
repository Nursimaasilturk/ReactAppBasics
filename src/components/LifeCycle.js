import {useState,useEffect} from "react";
function LifeCycle(){
	const [number,setNumber]= useState(0);
	// const [name,setName] = useState("Sima");
	// When the component is mounted
	useEffect(()=>{
		console.log('Component is mounted');
		const interval = setInterval(()=>{
			setNumber((n) => n + 1);
		},1000);
		return () => {
			clearInterval(interval);
			console.log('The component is unmounted')};
		}
	,[]);
	// when any state is updating
	// useEffect(()=>{
	// 	console.log("Component is updated!");
	// });
	//-----
	// for specific state
	useEffect(()=>{
		console.log("Number state is updated!");
	},[number]);
	// useEffect(()=>{
	// 	console.log("Name state is updated!");
	// },[name]);
	// useEffect(()=>{
	// 	console.log("Name or number state is updated!");
	// },[name,number]);
	return(
		<>
			<h1>LifeCycle</h1>
			<br/>
			<h2>Number Updating</h2>
			<div className="middle">
				<p className="custom-value">{number}</p>
				<button className="counter-btn in" onClick={()=> setNumber(number + 1)}>Click</button>
			</div>
			{/* <br/>
			<h2>Changing Name</h2>
			<div className="middle">
				<p className="custom-value">{name}</p>
				<button className="counter-btn dec" onClick={()=> setName("Nursima")}>Click</button>
			</div> */}
		</>
	)
}
export default LifeCycle;