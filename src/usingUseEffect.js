import { useState, useEffect } from "react";
export function UsingUseEffect()
{
	const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
	
	useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here, [] happens once when render, without 2nd parameter every time render(whenever any of the propr or state is changed)

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}


  
