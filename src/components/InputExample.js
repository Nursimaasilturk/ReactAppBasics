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
