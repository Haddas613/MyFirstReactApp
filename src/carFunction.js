import { useState } from "react";
import ReactDOM from "react-dom/client";


export function CarFunction() {
	
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - (currentYear-15) + 1 }, (_, i) => (currentYear-15) + i);

  
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red"
  });
	const updateBrand = (brandSelected) => {
    setCar(previousState => {
      return { ...previousState, brand: brandSelected }
    });
  }
  
  const updateModel = (modelSelected) => {
    setCar(previousState => {
      return { ...previousState, model: modelSelected }
    });
  }
  
   const updateYear = (yearSelected) => {
    setCar(previousState => {
      return { ...previousState, year: yearSelected }
    });
  }
  
   const updateColor = (colorSelected) => {
    setCar(previousState => {
      return { ...previousState, color: colorSelected }
    });
  }

  return (
  <>
   <br/><br/><br/>
	<div className= "containerSelect">
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color}  {car.model} {car.brand} from {car.year}.
      </p>
	  
     
	 <div className="side-by-side">
	<label>Choose a brand:</label>
  <div className="select">
	<select id="cardModels" value={car.brand} onChange={(e)=>updateBrand(e.target.value)}>
	 <option value="volvo">Volvo</option>
	 <option value="bmw">bmw</option>
	 <option value="toyota">Toyota</option>
	 <option value="lexus">Lexus</option>
	</select>
	</div>
	</div>
	
	<div className="side-by-side">
	<label>Choose a model:</label>
  <div className="select">
	<select id="cardModels" value={car.model} onChange={(e)=>updateModel(e.target.value)}>
	 <option value="7 seats">7 seats</option>
	 <option value="Manager">Manager</option>
	 <option value="Family">Family</option>
	 <option value="Luxory">Luxory</option>
	</select>
	</div>
	</div>
	
	<div className="side-by-side">
	<label>Choose a color:</label>
  <div className="select">
	<select id="cardModels" value={car.color} onChange={(e)=>updateColor(e.target.value)}>
	 <option value="orange">Orange</option>
	 <option value="red">Red</option>
	 <option value="blue">Blue</option>
	 <option value="black">Black</option>
	</select>
	</div>
	</div>
	
	<div className="side-by-side">
	<label>Choose a year:</label>
  <div className="select">
	<select
        id="yearSelector"
        value={car.year}
        onChange={(e) => updateYear(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
	</div>
	</div>
	
	
	</div>
    </>
  )
}