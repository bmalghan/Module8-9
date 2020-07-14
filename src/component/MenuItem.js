import React from "react";
import "./MenuItem.css";

const MenuItem = ({name, vegetarian, glutenFree, price, spice, description}) => {
    return (
        <div className='MenuItem'>
            <div className="row-one">
                <p>{name} {vegetarian ? <em className="veg">V</em> : <em></em>}</p>
                <p>{price}</p>
            </div>
    <p>{description}</p>
        </div>
    );
}

export default MenuItem;