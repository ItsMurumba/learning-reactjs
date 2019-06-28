import React from 'react';

class Car extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      color: "red",
      brand: "Ford",
      model: "Mustang",
      year: 1964
    }
  }
  changeColor = () => {
    this.setState({color: "blue"});
  } 
  render() {
    return (
        <div>
          <h2>Using the props</h2>
          <p>This is the {this.props.name} car!, Its Model is {this.props.brand.model} YOM: {this.props.brand.yom}</p> 
          <h2>Using the state Object</h2>
          <p>My {this.state.brand} </p>
          <p> It is a {this.state.color} {this.state.model} from {this.state.year}</p>   
          <button type="button" onClick={this.changeColor}>Change color</button>      
        </div>
    );
  }
}
class Garage extends React.Component{
  render(){
    const carname = "Ford";
    const carinfo = {model: "Mustang", yom:2019};
    return(
      <div>
        <h1>Who lives in my garage?</h1>
        <Car brand={carinfo} name={carname} />
      </div>
    );
  }
}
export default Garage;
