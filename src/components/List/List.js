import React from 'react';
import './List.css'

const List = ({list}) => {
    let totalTime=0;
    for (const item of list) {
        totalTime=totalTime + item.time;
    }
    return (
        <div className='list'>
            <h3>Exercise Details</h3>
            <h4 className='exercise-time'>Exercise time: <span>{totalTime} mins</span></h4>
        </div>
    );
};

export default List;