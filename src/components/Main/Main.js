import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import List from '../List/List';
import './Main.css'

const Main = () => {

    const [items, SetItems] = useState([])
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => SetItems(data))
    }, []);

    const handleAddToList = (item) => {
        const newList = [...list, item];
        setList(newList);
    }

    return (
        <div className='main-container'>
            <div className="items-container">

                {
                    items.map(item => <Item
                        key={item.id}
                        handleAddToList={handleAddToList}
                        item={item}
                    ></Item>)
                }
            </div>
            <div className="list-container">

                <List list={list}></List>
            </div>
        </div>
    );
};

export default Main;