import React from 'react';
import image from '../public/images/trade-images/image-1613863803229-263060053.jpeg';

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

const TradeItem = ({ value, handleClick }) => {
	const formatDate = (dateAsString) => {
		const date = new Date(dateAsString);
		const year = date.getFullYear();
		const monthName = months[date.getMonth()];
		const dayOfMonth = date.getDate();

		return monthName + '.' + dayOfMonth + ' ' + year;
	};

	const formatCreationTime = (dateAsString) => {
		const date = new Date(dateAsString);
		const hour = date.getHours();
		const monthName = months[date.getMonth()];
		const dayOfMonth = date.getDate();
		const minutes = date.getMinutes();

		return monthName + '.' + dayOfMonth + ' ' + hour + ':' + minutes;
	};
	return (
		<li class="list-group-item list-group-item-dark d-flex justify-content-between align-items-top">
			BUY {value.contractType.toUpperCase()} of {value.stock.toUpperCase()}{' '}
			strike {value.strike} at 3 usd (per contract) for{' '}
			{formatDate(value.expirationDate)}
			<div class="dropdown dropleft">
				<button
					class="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				></button>
				<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a class="dropdown-item" href="#">
						Action
					</a>
					<a class="dropdown-item" href="#">
						Another action
					</a>
					<a class="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
		</li>
	);
};

export default TradeItem;
