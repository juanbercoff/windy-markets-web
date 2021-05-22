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

const formatDate = (dateAsString) => {
	const date = new Date(dateAsString);

	const monthName = months[date.getMonth()];
	const dayOfMonth = date.getDate();

	return monthName + '.' + dayOfMonth + ' ';
};

const calculateTrade = (tradeValues) => {
	const netValue = Math.round(
		((tradeValues.closePrice - tradeValues.price) / tradeValues.price) * 100
	);

	if (netValue > 0) {
		return `GAIN ${netValue}%`;
	}
	return `LOSS ${Math.abs(netValue)}%`;
};

export function tradeText(tradeValues) {
	return (
		(!tradeValues.closePrice ? 'BUY' : '') +
		' ' +
		tradeValues.contractType.toUpperCase() +
		' of ' +
		tradeValues.stock.toUpperCase() +
		' strike ' +
		tradeValues.strike +
		' at ' +
		(tradeValues.price ? '$' + tradeValues.price : ' Market Price ') +
		' EXP ' +
		formatDate(tradeValues.expirationDate) +
		' ' +
		(tradeValues.closePrice
			? tradeValues.status.toUpperCase() +
			  ' at $' +
			  tradeValues.closePrice +
			  ' ' +
			  calculateTrade(tradeValues)
			: '')
	);
}

export function newTrade(tradeValues) {
	return (
		'BUY ' +
		tradeValues.contractType.toUpperCase() +
		' of ' +
		tradeValues.stock.toUpperCase() +
		' strike ' +
		tradeValues.strike +
		' at ' +
		(tradeValues.price ? '$' + tradeValues.price : ' Market Price ') +
		' EXP ' +
		formatDate(tradeValues.expirationDate)
	);
}

export function confirmedTrade(tradeValues) {
	return (
		'FILLED BUY ' +
		tradeValues.contractType.toUpperCase() +
		' of ' +
		tradeValues.stock.toUpperCase() +
		' strike ' +
		tradeValues.strike +
		' at ' +
		(tradeValues.price ? '$' + tradeValues.price : ' Market Price ') +
		' EXP ' +
		formatDate(tradeValues.expirationDate)
	);
}

export function deletedTrade(tradeValues) {
	return (
		'CANCELED BUY ' +
		tradeValues.contractType.toUpperCase() +
		' of ' +
		tradeValues.stock.toUpperCase() +
		' strike ' +
		tradeValues.strike +
		' at ' +
		(tradeValues.price ? '$' + tradeValues.price : ' Market Price ') +
		' EXP ' +
		formatDate(tradeValues.expirationDate)
	);
}

export function soldTrade(tradeValues) {
	return (
		'SOLD ' +
		tradeValues.contractType.toUpperCase() +
		' of ' +
		tradeValues.stock.toUpperCase() +
		' strike ' +
		tradeValues.strike +
		' at ' +
		(tradeValues.price ? '$' + tradeValues.price : ' Market Price ') +
		' EXP ' +
		formatDate(tradeValues.expirationDate)
	);
}
