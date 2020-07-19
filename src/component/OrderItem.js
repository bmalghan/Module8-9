import React from "react";
import Checkbox from '@material-ui/core/Checkbox';
import "./OrderItem.css";

const OrderItem = ({ name, vegetarian, glutenFree, price, spice, description }) => {
    return (
        <div className='orderItem'>
            <div className="row-one-order">
                <p style={{fontWeight: "bold", marginBottom: "8px"}}>{name} {vegetarian ? <em className="veg">V</em> : <em></em>}</p>
                <Checkbox
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                    name={name.replace(/\s/g,'')}
                />
            </div>
            <p style={{marginTop: "0"}} >${price}</p>
            <p>{description}</p>
        </div>
    );
}

export default OrderItem;