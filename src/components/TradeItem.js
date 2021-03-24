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

	const formatElapsedTime = (dateAsString) => {
		const date = new Date(dateAsString);
		let timeDiff = new Date() - date;
		timeDiff /= 1000;
		if (timeDiff < 60) {
			return Math.round(timeDiff) + ' seconds ago.';
		} else if (timeDiff < 3600) {
			return Math.round(timeDiff / 60) + ' minute(s) ago.';
		} else {
			return Math.round(timeDiff / 3600) + ' hour(s) ago.';
		}
	};

	return (
		<li className="list-group-item list-group-item-dark d-flex flex-column pb-0">
			<div className="d-flex flex-row justify-content-between">
				<div>
					BUY {tradeValues.contractType.toUpperCase()} of{' '}
					{tradeValues.stock.toUpperCase()} strike {tradeValues.strike} at{' '}
					{tradeValues.price ? tradeValues.price + '$' : ' market price '} EXP{' '}
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
						formatElapsedTime(tradeValues.updatedAt)}
				</small>
			</div>
		</li>
	);
};

export default TradeItem;
