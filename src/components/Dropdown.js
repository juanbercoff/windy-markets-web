import React, { useState } from 'react';
import Modal from './Modal';

const Dropdown = ({ tradeValues }) => {
	const [open, setIsOpen] = useState(false);
	return (
		<div>
			<div className="dropdown dropleft ps-4">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
				></button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<button
						type="button"
						className="dropdown-item"
						onClick={() => {
							return setIsOpen(true);
						}}
					>
						Update
					</button>
					<a className="dropdown-item" role="button">
						Cancel
					</a>
					<a className="dropdown-item" role="button">
						Confirm
					</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" role="button">
						Open Image
					</a>
				</div>
			</div>
			<Modal
				isOpen={open}
				tradeValues={tradeValues}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default Dropdown;
