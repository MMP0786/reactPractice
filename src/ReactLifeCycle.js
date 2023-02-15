import React from "react";

class ReactLifeCycle extends React.Component{
    constructor(){
        super()

        this.state = {
            count: 0
        }

        console.log("constructor called")
    }
    handleClick =()=>{
        this.setState({
            count: this.state.count +1
        })
    }

    shouldComponentUpdate(){
        console.log("should comp update")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("snap shot called")
        return null
    }

    componentDidUpdate(){
        console.log("componetDidUpdate")
        return true
    }
     static getDerivedStateFromProps(){
        console.warn("getDerived called")
        return null;
     }

     componentDidMount(){
        console.warn("componentDidMount called")
     }
    render(){
        console.warn("render called")
        return(
          <div className="App">
            <p>It's come from Class</p>  
            <p>{this.state.count}</p>
            <div> <button onClick={this.handleClick}>Increace Count</button></div>
          </div>
        )
    }
}
export {ReactLifeCycle};