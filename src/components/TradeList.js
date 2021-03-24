import React, { useState, useEffect } from 'react';
import TradeItem from './TradeItem';
import UserTradeItem from './UserTradeItem';
//import image from '../public/images/trade-images/image-1613863803229-263060053.jpeg'

const TradesList = ({ title, data, dropdownDisplay, tradeType }) => {
	//let history = useHistory();

	/* 	const handleUpdate = (trade) => {
		return history.push({
			pathname: '/modifyTradeForm',
			state: { trade: trade },
		});
	}; */

	const listTrades = data.map((trade) => {
		return tradeType === 'trade' ? (
			<TradeItem
				tradeValues={trade}
				/* handleUpdate={() => handleUpdate(trade)} */
				key={trade.id.toString()}
				dropdownDisplay={dropdownDisplay}
			/>
		) : (
			<UserTradeItem
				tradeValues={trade}
				/* handleUpdate={() => handleUpdate(trade)} */
				key={trade.id.toString()}
				dropdownDisplay={dropdownDisplay}
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
