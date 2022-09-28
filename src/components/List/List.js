import React from 'react';

const List = ({list}) => {
    return (
        <div>
            <h3>Exercise Details</h3>
            <h4>Exercise time: {list.length}</h4>
        </div>
    );
};

export default List;