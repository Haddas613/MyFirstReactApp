
class Home 
{
	constructor(numberOfRooms,numberOfFloors) {
    this.numberOfRooms = numberOfRooms;
	this.numberOfFloors=numberOfFloors;
  }
	
	present(){
		//?: Ternary Operator
		return this.numberOfRooms>0 &&this.numberOfFloors?  "Home has "+this.numberOfRooms+" rooms in "+this.numberOfFloors+" floors":"";
	}
	 //present=()=> "Home has "+this.numberOfRooms+" rooms in "+this.numberOfFloors+" floors";
}
///Modules
export {Home};