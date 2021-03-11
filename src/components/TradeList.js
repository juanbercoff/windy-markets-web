import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import TradeItem from './TradeItem';
//import image from '../public/images/trade-images/image-1613863803229-263060053.jpeg'

const TradesList = ({ title, requestURL }) => {
	let history = useHistory();
	const [data, setData] = useState([]);

	const handleClick = (trade) => {
		return history.push({
			pathname: '/modifyTradeForm',
			state: { trade: trade },
		});
	};

	const listTrades = data.map((trade) => {
		return (
			<TradeItem
				value={trade}
				handleClick={() => handleClick(trade)}
				key={trade.id.toString()}
			/>
		);
	});

	useEffect(() => {
		const getData = () => {
			return fetch(requestURL, { method: 'GET', credentials: 'include' })
				.then((res) => {
					if (res.ok) {
						return res.json();
					}
				})
				.then((trades) => {
					console.log(trades);
					setData(trades);
				});
		};
		getData();
	}, [requestURL]);
	return (
		<div className="col-lg-4 trades-wrapper">
			<h2>{title}</h2>
			<ul class="list-group">{listTrades}</ul>
		</div>
	);
};

export default TradesList;
