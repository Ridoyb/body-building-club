import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Main.css'

const Main = () => {

    const [items, SetItems]= useState([])

    useEffect( ()=> {
        fetch('item.json')
        .then(res=> res.json())
        .then(data => SetItems(data))
    }, []);
    return (
        <div className='main-container'>
            <div className="items-container">
                <h3>Select today’s exercise</h3>
                {
                    items.map(item=><Item
                    key={item.id}
                    item={item}
                    ></Item>)
                }
            </div>
            <div className="list-container">

                <h3>List section</h3>
            </div>
        </div>
    );
};

export default Main;