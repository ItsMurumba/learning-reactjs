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
        <MyForm />
      </div>
    );
  }
}

/**
 * Input Form Component
 */
class MyForm extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      username : '',
      age: null
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  mySubmitHandler = (event) =>  {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  render(){
    let header ='';
    if (this.state.username) {
      header = <p>Your name is: {this.state.username} and your age is {this.state.age}</p>;
    }else{
      header = '';
    }
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>React Forms</h1>
        {header}
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} name="username"></input>
        <input type='submit' />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler}/>
      </form>
    )
  }
}
export default Garage;
