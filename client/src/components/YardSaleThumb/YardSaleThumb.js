import React from 'react';
import './YardSaleThumb.scss'
import { useHistory, Link } from 'react-router-dom';
import { ReactComponent as YardSaleIcon } from '../../assets/icons/my-sales.svg';
import { ReactComponent as Pencil } from '../../assets/icons/pencil.svg';
import { ReactComponent as Trash } from '../../assets/icons/trash-2.svg';
import Button from '../Button/Button';

const SaleThumb = ({ 
    saleId, 
    name, 
    description,
    location,
    items
    }) => {

    const navigate = useHistory();

    const handleItemCick = (e, id) => {
        navigate.push(`/yard-sale/${id}`)
    }

    const handleSaleEdit = (e, id) => {

    }

    const handleSaleAddItem = (e, id) => {
        navigate.push('/new-sale-item')
    }

    const handleSaleDelete = (e, id) => {
        
    }

    const saleLocation = JSON.parse(location);

    return (
        <li onClick={items ? (e) => {handleItemCick(e, saleId)} : ''} className="yard-sale-thumb">

            {
                items ? // if viewing in browse, show item count
                <div className="yard-sale-thumb__counter">
                <YardSaleIcon className="yard-sale-thumb__icon"/>
            <span className="yard-sale-thumb__item-count">{`${items.length} Items`}</span>
                </div> : // if viewing in my sales, show edit buttons 
                <div className="yard-sale-thumb__edit">
                    <Button buttonType="button" onButtonClick={handleSaleEdit} buttonModifier=" button--edit">
                        <Pencil className="button__icon button__icon--edit"/>
                        Edit Sale
                    </Button>
                    <Button buttonType="button" onButtonClick={handleSaleAddItem} buttonModifier=" button--edit">
                        <span className="plus">+</span>
                        Add Item
                    </Button>
                </div>
            }
            
            <div className="yard-sale-thumb__content">
                <h3 className="yard-sale-thumb__name">
                    {name}
                </h3>
                <p className="yard-sale-thumb__description">
                    {description}
                </p>
                {
                    items ? // if viewing in browse, hide sale detail link
                    '' : //if viewing in my sales, show sale detail link
                    <Link to={`/yard-sale/${saleId}`} className="yard-sale-thumb__link">View details</Link>
                
                }
            </div>
            {
                items ? // if viewing in browse, show location
                <div className="yard-sale-thumb__location">     
                    {saleLocation.city}, {saleLocation.state}
                </div> : // if viewing in my sales, hide location and show delete button
                <Button buttonType="button" onButtonClick={handleSaleDelete} buttonModifier=" button--delete">
                    <Trash className="button__icon button__icon--delete" />
                </Button>
            }
            
        
        </li>
    );
};

export default SaleThumb;