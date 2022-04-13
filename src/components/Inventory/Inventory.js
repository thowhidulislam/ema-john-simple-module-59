import React from 'react';

const Inventory = (props) => {
    return (
        <div>
            <h1>This is Inventory</h1>
            {props.childeren}
        </div>
    );
};

export default Inventory;