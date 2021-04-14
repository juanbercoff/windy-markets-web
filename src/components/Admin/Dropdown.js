import React, { useState } from 'react';
import Modal from '../Modal';
import ModalCarousel from '../ModalCarousel';

const Dropdown = ({ tradeValues }) => {
	const [open, setIsOpen] = useState(false);
	const [carouselIsOpen, setCarouselIsOpen] = useState(false);
	const [images, setImages] = useState([]);
	const [action, setAction] = useState(null);
	const closedStatus = 'sold';

	const deleteTrade = () => {
		return fetch('/api/trades/', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id: tradeValues.id,
				imageURL: tradeValues.imageURL,
			}),
		}).then((res) => {
			if (res.status === 200) {
				return window.location.reload();
			}
		});
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

	const getImages = () => {
		return fetch('api/images/tradeImages/' + tradeValues.id, {
			method: 'GET',
			credentials: 'include',
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((images) => {
				console.log(images);
				setImages(images);
			});
	};

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
					<div>
						<button
							type="button"
							className="dropdown-item"
							disabled={tradeValues.status === closedStatus ? true : false}
							onClick={() => {
								setAction('updating');
								return setIsOpen(true);
							}}
						>
							Update
						</button>

						<button
							type="button"
							disabled={tradeValues.status === closedStatus ? true : false}
							className="dropdown-item"
							onClick={deleteTrade}
						>
							Delete
						</button>
						{tradeValues.status === 'filled' ? (
							<>
								<button
									type="button"
									disabled={tradeValues.status === closedStatus ? true : false}
									className="dropdown-item"
									onClick={() => {
										setAction('closing');
										return setIsOpen(true);
									}}
								>
									Sell
								</button>
								<button
									type="button"
									disabled={tradeValues.status === closedStatus ? true : false}
									className="dropdown-item"
									onClick={() => {
										setAction('roll');
										return setIsOpen(true);
									}}
								>
									Roll
								</button>
							</>
						) : (
							<button
								type="button"
								disabled={tradeValues.status === closedStatus ? true : false}
								className="dropdown-item"
								onClick={() => {
									if (tradeValues.price) {
										return confirmTrade();
									}
									setAction('confirm');
									return setIsOpen(true);
								}}
							>
								Confirm
							</button>
						)}
					</div>
					<div className="dropdown-divider"></div>
					<button
						type="button"
						className="dropdown-item"
						onClick={() => {
							getImages();
							return setCarouselIsOpen(true);
						}}
					>
						Open Images
					</button>
					<button
						type="button"
						className="dropdown-item"
						onClick={() => {
							setAction('addImage');
							return setIsOpen(true);
						}}
					>
						Add Image
					</button>
				</div>
			</div>
			<Modal
				isOpen={open}
				action={action}
				tradeValues={tradeValues}
				closeRequestURL={'/api/trades/close/' + tradeValues.id}
				onClose={() => {
					setIsOpen(false);
				}}
			/>
			<ModalCarousel
				isOpen={carouselIsOpen}
				images={images}
				onClose={() => {
					setCarouselIsOpen(false);
				}}
			/>
		</div>
	);
};

export default Dropdown;
