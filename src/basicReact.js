import React from 'react';
import ReactDOM from 'react-dom/client';
import {Home} from "./home.js";
var createReactClass = require('create-react-class');
var BasicReact = createReactClass({

  render: function() {
    
    var values = [];
    for (var i=1; i<=this.props.noDivs; i++) {
      values.push(new Home(i,i+1));
    }
	
	let text = "Goodbye";
	if (this.props.x < 10) {
		text = "Hello";
	}

	///Spread operator
	///Destructuring
	const [firsthouse,...rest]=values;
    
    return (

      <div>
	  <h1>{text}</h1>
	  
	  <br/>
	  	<p  key={firsthouse.numberOfFloors}>
	{firsthouse.present()}
	</p>
      {rest.map( (house) =>
		  //need to think about override key with a unique key
	   <p  key={house.numberOfFloors}>{house.present()}</p>
      )}
	
      </div>
    );
  }
})
export {BasicReact};