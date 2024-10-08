import {useState} from "react"
function State(){
	const [name,setName] = useState('Sima');
	const [age, setAge] = useState();
	const [fruits,setFruits] = useState(["apple","watermelon","lemon"]);
	const [address,setAddress] = useState({city:"Erzurum",province:'Pasinler',zip:25096});
	return(
		<>
		 <h1>State Component</h1>
		 <p>{name}</p>
		 <p>Age:{age}</p>
		 <button onClick={()=> {setName('Ömer');setAge(24);}} >Change Name and Age *!</button>

		 <hr/>
		 {fruits.map((fruit,key) => 
			<div key={key}>{fruit}</div>
		 )}
		 <button onClick={() => setFruits([...fruits,'peach'])}>Add new fruit !</button>

		 <hr/>
		 <h2>Adress</h2>
		 <p>{address.city}</p>
		 <p>{address.province}</p>
		 <p>{address.zip}</p>

		 <button onClick={()=>setAddress({city:'Bursa',province:'İnegöl',zip:16000})}>Change the address</button>
		 <button onClick={()=>setAddress({...address,province:'Nilüfer',zip:16120})}>Update address</button>
		</>
	)
}
export default State