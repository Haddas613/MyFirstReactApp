import { useState } from 'react';
export function FormManyInputs()
{
	const [inputs,setInputs] = useState({});
	const handleChange=(event)=>{
		const nameInput=event.target.name;
		const value = event.target.value;
		setInputs(values=> ({...values,[nameInput]:value}))
	}
	const handleSubmit=(event)=>{
		event.preventDefault();
		alert(`${inputs.name} is ${inputs.age} years old`);
		console.log(inputs);
	}
	return (
		<form onSubmit={handleSubmit}>
		<label> Enter your name:
	<input type="text"
	value={inputs.name || ""}
	name="name"
	onChange={handleChange}
	/>
	</label>

	
	<label> Enter your age:
	<input type="number"
	value={inputs.age || ""}
	name="age"
	onChange={handleChange}
	/>
	</label>
	<input type="submit" value="submit me" />
		
		</form>
	)
}