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
		const monthName = months[date.getMonth()];
		const dayOfMonth = date.getDate();

		return monthName + '.' + dayOfMonth + ' ';
	};

	const formatCreationTime = (dateAsString) => {
		const date = new Date(dateAsString);
		const hour = date.getHours();
		const minutes = date.getMinutes();

		return hour + ':' + minutes;
	};

	return (
		<li className="list-group-item list-group-item-dark d-flex flex-column pb-0">
			<div className="d-flex flex-row justify-content-between">
				<div>
					BOUGHT {tradeValues.trade.contractType.toUpperCase()} of{' '}
					{tradeValues.trade.stock.toUpperCase()} strike{' '}
					{tradeValues.trade.strike} at {tradeValues.price}$ EXP{' '}
					{formatDate(tradeValues.trade.expirationDate)}{' '}
					{tradeValues.trade.closePrice
						? 'SOLD at ' + tradeValues.trade.closePrice + '$'
						: null}
				</div>
				{dropdownDisplay ? <Dropdown tradeValues={tradeValues} /> : null}
			</div>
			{/* <div className="d-flex w-100 pt-1">
				<small>
					{tradeValues.trade.status.toUpperCase() +
						' ' +
						formatCreationTime(tradeValues.trade.updatedAt)}
				</small>
			</div> */}
		</li>
	);
};

export default TradeItem;
