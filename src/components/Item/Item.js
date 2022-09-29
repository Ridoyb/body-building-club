import React from 'react';
import './Item.css'

const Item = (props) => {
    const {name, details, age, time, img, breaks}= props.item;
    // const {handleAddToList}=props;
    console.log(props)
    return (
        <div className='item'>
            <img src={img} alt=""/>
            <div className='item-info'>
                <h4 className='item-name'>{name}</h4>
                <p>{details}</p>
                <h5>For Age: {age}</h5>
                <h5>Time: {time}</h5>
            </div>

            <button onClick={() => props.handleAddToList(props.item)} className='btn-list'>
                <p>Add To List</p>
            </button>
        </div>

        
    );
};

export default Item;