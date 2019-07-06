import React from 'react';

class Car extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],
      color: "red",
      brand: "Ford",
      model: "Mustang",
      year: 1964,
      show: true
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
      </div>
    );
  }
}

/**
 * 
 */
class Child extends React.Component{
  componentWillUnmount(){
    alert("This component name Header is about to be unmounted");
  }
  render(){
    return (
      <h1>Hello World!</h1>
    );
  }
}
export default Garage;
