import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Item from '../Item/Item';
import List from '../List/List';
import { addToDb, getStoredCart } from './../../utilities/fakedb'
import './Main.css'

const Main = () => {

    const [items, SetItems] = useState([])
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('item.json')
            .then(res => res.json())
            .then(data => SetItems(data))
    }, []);

    useEffect(()=> {
        const storedCart=getStoredCart();
        const savedList= [];
        for(const id in storedCart){
            const addedItem=items.find(item => item.id===id);
            if(addedItem){
                const quantity=storedCart[id];
                addedItem.quantity=quantity;
                savedList.push(addedItem);
            }
        }
        setList(savedList);
    }, [items])

    const handleAddToList = (item) => {
        const newList = [...list, item];
        setList(newList);
        addToDb(item.id);
        

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