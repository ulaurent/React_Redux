import React, { Component } from 'react';

class Ninjas extends Component {
    render(){
        //Destructuring
        const {ninjas} = this.props;

        // Map in JS to cycle through each ninja element .map
        // This is how we loop through data and output it to the DIV below 
        const ninjaList = ninjas.map (ninjas =>{
            return(
                <div className="ninjas" key = {ninjas.id}>
                    <div>Name: {ninjas.name} </div>
                    <div>Age: {ninjas.age} </div>
                    <div>Belt: {ninjas.belt} </div>
                </div>
            )
        })

        // So must have return statement for render function
        // Inside this div will return 
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }
}

export default Ninjas