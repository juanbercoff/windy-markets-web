import React from 'react';
import { tradeText } from '../../helpers';

const formatElapsedTime = (dateAsString) => {
	const date = new Date(dateAsString);
	let timeDiff = new Date() - date;
	timeDiff /= 1000;
	if (timeDiff < 60) {
		return Math.round(timeDiff) + ' sec ago.';
	} else if (timeDiff < 3600) {
		return Math.round(timeDiff / 60) + ' min ago.';
	} else {
		return Math.round(timeDiff / 3600) + ' hs ago.';
	}
};

const TradeItem = ({ tradeValues, dropdown }) => {
	const Dropdown = dropdown;

	return (
		<li className="list-group-item list-group-item-dark d-flex flex-column pb-0">
			<div className="d-flex flex-row justify-content-between">
				<div>{tradeText(tradeValues)}</div>
				{Dropdown ? <Dropdown tradeValues={tradeValues} /> : null}
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
