import React from 'react';
import image from '../public/images/trade-images/image-1613863803229-263060053.jpeg'
import { useHistory } from "react-router-dom";

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]


const TradeItem = ({value, handleClick}) => {
    const formatDate = (dateAsString) => {
        const date = new Date(dateAsString)
        const year = date.getFullYear();
        const monthName = months[date.getMonth()];
        const dayOfMonth = date.getDate();

        return monthName + '.' + dayOfMonth + ' ' + year
    }

    return (
    <div>
        <li className="list-group-item list-group-item-action" onClick={handleClick}>
            Buying {value.contractType} options of {value.stock} strike {value.strike} for {formatDate(value.expirationDate)}
        <img src={image} width='100%' height='auto' alt='trade'/>
        </li>
    </div>
    )
}

export default TradeItem;