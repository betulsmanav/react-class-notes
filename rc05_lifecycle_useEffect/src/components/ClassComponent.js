import React from 'react'

class ClassComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state={count:0}
  // }
  // state = { count: 0 }
  

  // increase=()=>this.setState({count:this.state.count +1})
  // increase=()=>this.setState({name:"Felix"})

  // componentDidMount() {
  //   console.log('class comp mounted');
  // }
  render() {
    // console.log('class comp rendered');

    // console.log(this.state);
    return (
      <div className="class">
        {/* <h2>Class Component</h2>
        <h3>Count:{this.state.count}</h3>
        {/* <h3>Name:{this.state.name}</h3> */}
        {/* <button onClick={this.increase}>Increase</button> */} 
      </div>
    )
  }
}

export default ClassComponent
