import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);// count={current:0}

  useEffect(() => {//כל פעם שערך כלשהו בקומפוננטה משתנה כי הפרמטר השני של  יוז אפקט ריק. 
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}