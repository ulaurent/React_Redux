import React from 'react';

// The ninjas prop as a parameter function
const Ninjas = ({ninjas}) => {
        // Turnary Operator
        const ninjaList = ninjas.map(ninjas => {
            return ninjas.age > 24? (
                 <div className="ninjas" key = {ninjas.id}>
                    <div>Name: {ninjas.name} </div>
                     <div>Age: {ninjas.age} </div>
                     <div>Belt: {ninjas.belt} </div>
                 </div>
            ): (null);
        });

        // So must have return statement for render function
        // Inside this div will return 
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
    }


export default Ninjas