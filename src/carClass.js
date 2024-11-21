import React from 'react';

/// Class Component return html
/// an inheritance to React.Component, and gives your component access to React.Component's functions.
class Car extends React.Component {
	///
	///mounting- React has four built-in methods that gets called, in this order, when mounting a component:
		///constructor()
		///getDerivedStateFromProps()         is called right before rendering the element(s) in the DOM
                                    /// It takes state as an argument, and returns an object with changes to the state.
		///render()------required
		///componentDidMount()             method is called after the component is rendered.
	///updating
	///when a component is updated:
		///getDerivedStateFromProps()
		///shouldComponentUpdate()
		///render()
		///getSnapshotBeforeUpdate() not required but if implemented  componentDidUpdate must be implemented
		///componentDidUpdate()
	//unmounting	
		//componentWillUnmount before unmount
  constructor(props){
	  //pass it to the React.Component (the father)
  super(props);
  this.state = {
	  count:1,
      brand: props.brand,
      model: props.model,
      color: props.color,
      year: props.year
    };
  }
  componentDidMount()
  {
	  setTimeout(() => this.setState({color:"yellow"}),5000);
  }
  ///Stop the component from rendering at any update:
  shouldComponentUpdate() {
    return true;//default is true. when false.. need to add it
  }
  changeColor=() => {
	  this.state.count++;
	  if(this.state.count%2==0)
	  {
		  //this.state.color = "red";
		  this.setState({color: "red"});
	  }
	  else
	  {
		  //this.state.color = "blue";
		  this.setState({color: "blue"});
	  }
	  
  }
  render() {
    return(<>	
	<h2>Hi, I am a {this.state.color} {this.state.model} {this.state.brand} {this.state.year}  Car!</h2>
	<button type="button" onClick={() => this.changeColor()}> click to change color </button>
	</>);
  }
}

export {Car};