import React from 'react';
import TradeItem from './Common/TradeItem';

const TradesList = ({ title, data, dropdown }) => {
	const listTrades = data.map((trade) => {
		return (
			<TradeItem
				tradeValues={trade}
				key={trade.id.toString()}
				dropdown={dropdown}
			/>
		);
	});

	return (
		<div className="col-lg-4 trades-wrapper">
			<h2>{title}</h2>
			<ul className="list-group">{listTrades}</ul>
		</div>
	);
};

export default TradesList;
