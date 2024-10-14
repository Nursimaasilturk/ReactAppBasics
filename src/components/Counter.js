import React, { useState } from "react";
function Counter(){
	const [count,setCount] = useState(0);
	const increase = () =>{
		setCount(count + 1);
	}
	const decrease = () =>{
		setCount(count - 1);
	}
	return( 
	<>
		<h1>Counter Component</h1>   
		<div className="middle">
			<button className="counter-btn dec" onClick={decrease}>Decrease</button>
			<h2 className="counter-value">{count}</h2>
			<button className="counter-btn in" onClick={increase}>Increase</button>
		</div> 
	</>
	);
}
export default Counter;