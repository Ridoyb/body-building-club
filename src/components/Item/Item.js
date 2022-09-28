import React from 'react';
import './Item.css'

const Item = (props) => {
    const {name, details, age, time, img}= props.item;
    return (
        <div className='item'>
            <img src={img} alt=""/>
            <div className='item-info'>
                <h4 className='item-name'>{name}</h4>
                <p>{details}</p>
                <h5>For Age: {age}</h5>
                <h5>Time: {time}</h5>
            </div>

            <button className='btn-list'>Add To List</button>
        </div>
    );
};

export default Item;