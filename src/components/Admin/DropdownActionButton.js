import React from 'react';

const DropdownActionButton = ({ tradeValues, setAction, setIsOpen }) => {
	const buttonText = () => {
		// eslint-disable-next-line default-case
		switch (tradeValues.status) {
			case 'placed':
				return 'Confirm';
			case 'filled':
				return 'Pre Sell';
			case 'presold':
				return 'Confirm Sell';
		}
	};

	const confirmTrade = () => {
		return fetch('/api/trades/confirm/' + tradeValues.id, {
			method: 'PUT',
		}).then((res) => {
			if (res.status === 200) {
				return window.location.reload();
			}
			res.json().then(() => {
				return console.log('Trade was confirmed');
			});
		});
	};

	const preSellTrade = () => {
		return fetch('/api/trades/presell/' + tradeValues.id, {
			method: 'PUT',
		}).then((res) => {
			if (res.status === 200) {
				return window.location.reload();
			}
			res.json().then(() => {
				return console.log('Trade was presold ');
			});
		});
	};

	const handleClick = () => {
		if (tradeValues.status === 'placed') {
			return confirmTrade();
		} else if (tradeValues.status === 'filled') {
			return preSellTrade();
		}

		setAction();
		setIsOpen();
	};

	if (tradeValues.status === 'sold') return '';

	return (
		<button
			type="button"
			//disabled={tradeValues.status === closedStatus ? true : false}
			className="dropdown-item"
			onClick={handleClick}
		>
			{buttonText()}
		</button>
	);
};

export default DropdownActionButton;
