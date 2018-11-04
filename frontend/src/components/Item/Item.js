import React from 'react';
import './Item.css';


const item = (props) => {
    return   (
        <div className = "Item">
            <p>{props.text}</p> 
            <p>{props.children}</p>
        </div>

    )
}
export default item;