import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { product, handleRemoveProduct } = props
    const { name, seller, price, img, shipping, quantity } = product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className='review-items-details'>
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + "..." : name}
                    </p>
                    <p><small>Price: <span>{price}</span></small></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>

                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ReviewItem;