import React from 'react';
//import image from '../public/images/trade-images/image-1613863803229-263060053.jpeg'

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

        <tr class="w-25">
            <td>{value.contractType}</td>
            <td>{value.stock}</td>
            <td>{value.strike}</td>
            <td>{formatDate(value.expirationDate)}</td>
            <td>13</td>
        </tr>

    )
}

export default TradeItem;