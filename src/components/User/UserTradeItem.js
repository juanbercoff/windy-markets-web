import React from 'react';

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

const TradeItem = ({ tradeValues, dropdown }) => {
	const Dropdown = dropdown;
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
			return Math.round(timeDiff) + ' sec(s) ago.';
		} else if (timeDiff < 3600) {
			return Math.round(timeDiff / 60) + ' min(s) ago.';
		} else {
			return Math.round(timeDiff / 3600) + ' hs ago.';
		}
	};

	const calculateTrade = () => {
		const netValue = Math.round(
			((tradeValues.closePrice - tradeValues.price) / tradeValues.price) * 100
		);

		if (netValue > 0) {
			return `GAIN ${netValue}%`;
		}
		return `LOSS ${Math.abs(netValue)}%`;
	};

	return (
		<li className="list-group-item list-group-item-dark d-flex flex-column pb-0">
			<div className="d-flex flex-row justify-content-between">
				<div>
					{!tradeValues.closePrice ? 'BOUGHT' : null}{' '}
					{tradeValues.trade.contractType.toUpperCase()} of{' '}
					{tradeValues.trade.stock.toUpperCase()} strike{' '}
					{tradeValues.trade.strike} at ${tradeValues.price} EXP{' '}
					{formatDate(tradeValues.trade.expirationDate)}{' '}
					{tradeValues.closePrice
						? 'SOLD at $' + tradeValues.closePrice + ' ' + calculateTrade()
						: null}
					{/* 
					
					
					
					{tradeValues.closePrice
						? tradeValues.status.toUpperCase() +
						  ' at $' +
						  tradeValues.closePrice +
						  ' ' +
						  calculateTrade()
						: null} */}
				</div>
				{Dropdown ? (
					<Dropdown tradeValues={tradeValues} followed={true} />
				) : null}
			</div>
			{
				<div className="d-flex w-100 pt-1">
					<small>
						{(tradeValues.status === 'open' ? 'FOLLOWED ' : 'SOLD ') +
							formatElapsedTime(tradeValues.updatedAt)}
					</small>
				</div>
			}
		</li>
	);
};

export default TradeItem;
