import React from "react";
import PropTypes from "prop-types"

class PropTypesPractice extends React.Component{
    constructor(){
        super()
        this.state={
            name: "Athar",
            age: 22,
            profasion: "Teaching",
            hobbies: ["photo", "walk", "fashion"]
            
        }
    }
    handleClick(){
        this.setState({
            name:"Luqman"
        })
        console.warn("clicked")
    }
    // handleClick =()=>{
    //     this.setState({
    //         name:"Luqman"
    //     })
    //     console.warn("clicked")
    // }
    render(){
        return(
            <>
            
            <h3>It's About other {this.state.name} and age {this.state.age} and {this.state.profasion} and hobbies {this.state.hobbies.map(hobby =><span> {hobby} </span>)}</h3>


             <p>this text comming from class Component</p>

            

            <h2>My name is {this.props.name} and age {this.props.age} . Is i'm Married
             {this.props.isMarried.toString()} my friends is {this.props.arr[0]}</h2>

             <p style={{ textAlign:"center"}}> <button onClick={()=>this.handleClick()}>Change Text</button></p>
            </>

        )
    }
    
}
PropTypesPractice.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool,
    arr: PropTypes.array
}

export default PropTypesPractice;