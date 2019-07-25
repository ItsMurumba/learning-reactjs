import React from 'react';
import styles from './mystyle.module.css';

class Car extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      color: "red",
      brand: "Ford",
      model: "Mustang",
      year: 1964,
      show: true,
      mycar: 'Volvo'
    }
  }

  /**
   * Method to change the color
   */
  changeColor = () => {
    this.setState({color: "blue"});
  }

  /**
   * Method to delete the header
   */
  delHeader = () => {
    this.setState({show: false});
  }

  /**
   * getDerivedStateFromProps
   */

  /**
   * componentDidMount Method
   * This is where you run statements that requires that the component is already placed in the DOM
   */
  componentDidMount(){
    setTimeout(() => {
      this.setState({brand: "Toyota"})
    }, 1000)
  }

  /**
   * shouldComponentUpdate()
   * Can return a Boolean value that specifies whether React should continue with the rendering or not.
   * The default value is true.
   */
  shouldComponentUpdate(){
    return true;
  }

  /**
   * In the getSnapshotBeforeUpdate() method you have access to the props and state before 
   * the update, meaning that even after the update, 
   * you can check what the values were before the update.
   * 
   * If the getSnapshotBeforeUpdate() method is present, you should also include the 
   * componentDidUpdate() method, otherwise you will get an error.
   * @param {*} prevProps 
   * @param {*} prevState 
   */
  getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById("div1").innerHTML = "Before the update, the favorite brand was " + prevState.brand;
  }

  /**
   * componentDidUpdate() method
   */
  componentDidUpdate(){
    document.getElementById("div2").innerHTML = 
    "The updated favorite brand is  " + this.state.brand;
  }

  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />
    }
    return (
        <div>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button>
          <h2>Using the props</h2>
          <p>This is the {this.props.name} car!, Its Model is {this.props.brand.model} YOM: {this.props.brand.yom}</p> 
          <h2>Using the state Object</h2>
          <p>My {this.state.brand} </p>
          <p> It is a {this.state.color} {this.state.model} from {this.state.year}</p>   
          <button type="button" onClick={this.changeColor}>Change color</button> 

          <div id="div1"></div>
          <div id="div2"></div>

          
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
 * Function to unmount a component
 * Input Form Component
 */
class MyForm extends React.Component{
  constructor (props){
    super(props);
    this.state = {
      username : '',
      age: null,
      errormessage: ''
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if(val !=="" && !Number(val)){
        err = <strong>Your age must be a number</strong>
      }
    }
    this.setState({errormessage: err});
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
        <input className="form-control" type="text" onChange={this.myChangeHandler} name="username"></input>
        <p>Enter your age:</p>
        <input className="form-control" type="text" name="age" onChange={this.myChangeHandler}/>
        {this.state.errormessage}
        <br/>
        <br/>
        <input className="btn-success" type='submit' />
        <br/>
        <br/>
        <textarea className="form-control" value={this.state.description} />
        <br/>
        <br/>
        <select value={this.state.mycar}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )
  }
}
class Child extends React.Component{
  componentWillUnmount(){
    alert("This component name Header is about to be unmounted");
  }
  render(){
    const mystyle = {
      color: "red",
      backgroundColor: "DodgeBlue",
      padding: "10px",
      fontFamily: "Arial"
    }
    return (
      <div>
      <h1 style={{color:"blue", backgroundColor:"black"}}>Hello World!</h1>
      <p style={mystyle}>Hello style!</p>
      <p className={styles.bigblue}>Hello Kelvin Murumba!</p>
      <button className="btn-primary">Boostrapped Button</button>
      </div>
    );
  }
}

/**
 * Passing Arguments
 */
class Football extends React.Component{
  shoot = (a) => {
    alert(a);
  }
  render(){
    return(
      <div>
        <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
      </div>
    )
  }
}
export default Garage;
