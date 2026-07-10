
import { Component } from 'react'

export class ClassComponentEx extends Component {
    constructor(props){
        super(props);
        this.state = {count : 0}; //initial count state
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }
    increment(){
        this.setState({count: this.state.count + 1});

    }
    decrement(){
        this.setState({count: this.state.count - 1});
    }
  render() {
    return (
      <div>
        this is ClassComponentEx
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        
    </div>
    )
  }
}
export default ClassComponentEx