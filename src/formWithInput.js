import { useState } from 'react';
//////Function component
export function FormWithInput()
{
	const [name, setName]=useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		!name || name.trim() === "" ? alert("your name can not be empty") : alert(`Your name is ${name}`); 
	}

	return (
	<form onSubmit={handleSubmit}>
	<label> Enter your name:
	<input type="text"
	value={name}
	name="name"
	onChange={(e)=>setName(e.target.value)}
	/>
	</label>
	<input type="submit" value="submit me" />
	<h3>Your name is {name} </h3>
	</form>
	);
}