import React from 'react';
import Dropdown from './Dropdown';

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
	'Dec',
];

const TradeItem = ({ tradeValues, dropdownDisplay }) => {
	const formatDate = (dateAsString) => {
		const date = new Date(dateAsString);
		const year = date.getFullYear();
		const monthName = months[date.getMonth()];
		const dayOfMonth = date.getDate();

		return monthName + '.' + dayOfMonth + ' ';
	};

	const formatCreationTime = (dateAsString) => {
		const date = new Date(dateAsString);
		const hour = date.getHours();
		const monthName = months[date.getMonth()];
		const dayOfMonth = date.getDate();
		const minutes = date.getMinutes();

		return hour + ':' + minutes;
	};

	return (
		<li className="list-group-item list-group-item-dark d-flex flex-column pb-0">
			<div className="d-flex flex-row justify-content-between">
				<div>
					BUY {tradeValues.contractType.toUpperCase()} of{' '}
					{tradeValues.stock.toUpperCase()} strike {tradeValues.strike} at{' '}
					{tradeValues.price}$ (per contract) for{' '}
					{formatDate(tradeValues.expirationDate)}{' '}
					{tradeValues.closePrice
						? 'SOLD at ' + tradeValues.closePrice + '$'
						: null}
				</div>
				{dropdownDisplay ? <Dropdown tradeValues={tradeValues} /> : null}
			</div>
			<div className="d-flex w-100 pt-1">
				<small>
					{tradeValues.status.toUpperCase() +
						' ' +
						formatCreationTime(tradeValues.updatedAt)}
				</small>
			</div>
		</li>
	);
};

export default TradeItem;
