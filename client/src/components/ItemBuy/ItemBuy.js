import React, { useState, useEffect } from 'react';
import './ItemBuy.scss';
import Button from '../Button/Button';


function ItemBuy({
    item, 
    percent, 
    cartHandlerAdd,
    cartHandlerDelete
}) {

    const [isInCart, setIsInCart] = useState();

     // check if item is in cart
     useEffect(() => {
        if (JSON.parse(localStorage.getItem('rummageCart')).find(cartItem => cartItem === item.id )) {
            setIsInCart(true);
        } else {
            return null;
        }
    }, [item.id]
    );

    // Add item to cart
    const handleAddtoCart = (e, id) => {
        cartHandlerAdd(e, id);

        setIsInCart(true);

    }

    // Remove item from cart
    const handleRemoveFromCart = (e, id) => {
        cartHandlerDelete(e, id);
        
        setIsInCart(false);

    }

    const sunsetPricing = (remainder) => {

        if (remainder <= 25 && remainder > 10) {
            return (
                <div className="item-buy__price-container">
                    <span className="item-buy__price-original">
                    {item.price.toFixed(2)}
                    </span>
                    <div className="item-buy__price item-buy__price--25">
                    {(item.price * 0.5).toFixed(2)}
                    </div>  
                </div> 
            )
        } else if (remainder <= 10 && remainder > 5) {
            return (
                <div className="item-buy__price-container">
                    <span className="item-buy__price-original">
                    {item.price.toFixed(2)}
                    </span>
                    <div className="item-buy__price item-buy__price--10">
                        
                        {(item.price * 0.4).toFixed(2)}
                    </div>  
                </div>              
                )
        } else if (remainder <= 5) {
            return (
                <div className="item-buy__price-container">
                    <span className="item-buy__price-original">
                    {item.price.toFixed(2)}
                    </span>
                    <div className="item-buy__price item-buy__price--5">
                        {(item.price * 0.25).toFixed(2)}
                    </div>  
                </div>
                )
        } else {
            return (
                <div className="item-buy__price">
                 {item.price.toFixed(2)}
           </div>
            )
        }
    }

    if (percent <= 25 && percent > 10) {
        return (
            <div className="item-buy item-buy--25">
               
                {sunsetPricing(percent)}
                
                <Button 
                buttonType="button" 
                onButtonClick={isInCart ? (e) => handleRemoveFromCart(e, item.id) : (e) => handleAddtoCart(e, item.id)}
                buttonModifier=" button--cart-25">
                    {
                        isInCart ? 
                        "Remove Item" : 
                        "Add to Cart"
                    }
                </Button> 
            </div> 
        );
    } else if (percent <= 10 && percent > 5) {
        return (
            <div className="item-buy item-buy--10">
                {sunsetPricing(percent)}
                <Button 
                buttonType="button" 
                onButtonClick={isInCart ? (e) => handleRemoveFromCart(e, item.id) : (e) => handleAddtoCart(e, item.id)}
                buttonModifier=" button--cart-10">
                    {
                        isInCart ? 
                        "Remove Item" : 
                        "Add to Cart"
                    }
                </Button> 
            </div> 
        );
    } else if (percent <= 5) {
        return (
            <div className="item-buy item-buy--5">
                {sunsetPricing(percent)}
                <Button 
                buttonType="button" 
                onButtonClick={isInCart ? (e) => handleRemoveFromCart(e, item.id) : (e) => handleAddtoCart(e, item.id)}
                buttonModifier=" button--cart-5">
                    {
                        isInCart ? 
                        "Remove Item" : 
                        "Add to Cart"
                    }
                </Button> 
            </div> 
        );
    } else {
        return (
            <div className="item-buy">
                {sunsetPricing(percent)}
                <Button 
                buttonType="button" 
                onButtonClick={isInCart ? (e) => handleRemoveFromCart(e, item.id) : (e) => handleAddtoCart(e, item.id)}
                buttonModifier=" button--cart">
                    {
                        isInCart ? 
                        "Remove Item" : 
                        "Add to Cart"
                    }
                </Button> 
            </div> 
        );
    }

    
}

export default ItemBuy;