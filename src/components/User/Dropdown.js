import React, { useState } from 'react';
import Modal from '../Modal';
import ModalCarousel from '../ModalCarousel';

const Dropdown = ({ tradeValues, followed }) => {
	const [open, setIsOpen] = useState(false);
	const [carouselIsOpen, setCarouselIsOpen] = useState(false);
	const [images, setImages] = useState([]);
	const [action, setAction] = useState(null);
	const closedStatus = 'sold';

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
					{followed ? (
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
					) : (
						<button
							type="button"
							className="dropdown-item"
							disabled={tradeValues.status === closedStatus ? true : false}
							onClick={() => {
								setAction('adding');
								return setIsOpen(true);
							}}
						>
							Follow
						</button>
					)}

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
				</div>
			</div>
			<Modal
				isOpen={open}
				action={action}
				tradeValues={tradeValues}
				closeRequestURL={'/api/userTrades/close/'}
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
