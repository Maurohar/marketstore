import React, { useState } from 'react';
import './ItemCount.css'; 

const ItemCount = () => {
    const [count, setCount] = useState(1);

    const unitSums = () => {
        setCount(count + 1);
    };

    const subtractUnit = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count-container">
            <button onClick={subtractUnit} className="subtract-btn">-</button>
            <span className="quantity-text">{count}</span>
            <button onClick={unitSums} className="add-btn">+</button>
        </div>
    );
}

export default ItemCount;