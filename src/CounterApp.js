import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import React, { Fragment } from 'react';



const CounterApp = ( { value = 10 } ) => {

    const [counter, setCounter] = useState( value );


    const HandleAdd = () => setCounter( counter + 1);
        
    const HandleRest = () =>   setCounter( counter - 1);
    
    const HandleReset = () =>  setCounter( value);
    

    return (
    <>  
    <h1>CounterApp</h1>
    <h2> { counter }</h2>
    <button onClick = { HandleAdd }>+1</button>
    <button onClick = { HandleReset }>Reset</button>
    <button onClick = { HandleRest }>-1</button>
    </>  
    )

}

CounterApp.propTypes = {
    value : PropTypes.number
}




export default CounterApp;
