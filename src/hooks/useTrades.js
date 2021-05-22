import { useCallback, useEffect, useState } from 'react';

export const useTrades = (shouldFetch, requestURL) => {
	const [trades, setTrades] = useState([]);
	const [fetching, setFetching] = useState(false);

	const getTrades = useCallback(async () => {
		setFetching(true);
		try {
			const response = await fetch(requestURL, {
				method: 'GET',
				credentials: 'include',
			});
			const trades = await response.json();

			setTrades(trades);
		} catch (error) {
			console.error(error);
		}
		setFetching(false);
	}, [requestURL]);

	useEffect(() => {
		if (shouldFetch) {
			getTrades();
		}
	}, [getTrades, shouldFetch]);

	return {
		trades,
		fetching,
	};
};
