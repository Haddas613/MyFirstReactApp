import { useState } from 'react';
export function FormWithSelect()
{
	const [car,setCar] = useState("");
	const changeModel= (event) =>  {
		setCar(event.target.value);
	}
	
	return (
	<form>
	
	<div className= "containerSelect">
	<label>Choose a car:</label>
  <div className="select">
	<select id="cardModels" value={car} onChange={changeModel}>
	 <option value="volvo">Volvo</option>
	 <option value="bmw">bmw</option>
	 <option value="toyota">Toyota</option>
	 <option value="lexus">Lexus</option>
	</select>
	</div>
	{ !car || car==="" ? null : <p>You selected a {car} car </p> }
	</div>
	
	</form>
	);
}