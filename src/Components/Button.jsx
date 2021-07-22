import React from 'react';
import { Ucategories } from './Gallery';

const Button = (props) => {
    return (
<>
    {Ucategories.map((val,index) => {
        return (
        <button key={index} className='bg-warning buttonDesign' onClick={() => {props.filterItem(val)}}> {val}</button>
        );
    })

    }
    
</>

    );
}

export default Button;