import React from "react";
import PropTypes from "prop-types"

class PropTypesPractice extends React.Component{

    render(){
        return(
            <> <p>this text comming from class Component</p>
            <h2>My name is {this.props.name} and age {this.props.age} . Is i'm Married
             {this.props.isMarried.toString()} my friends is {this.props.arr[0]}</h2>
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