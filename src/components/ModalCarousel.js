import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const ModalCarousel = ({ isOpen, onClose, images }) => {
	if (!isOpen) {
		return null;
	}

	const listImages = images.map((image, index) => {
		console.log(index);
		return (
			<div
				className={index === 0 ? 'carousel-item active' : 'carousel-item'}
				key={image.id}
			>
				<img
					className="d-block w-100"
					/* require('../images/' + fileNameExt)}  */
					/* src={'../public/images/trade-images/' + image.imageURL} */
					src={
						require('../public/images/trade-images/' + image.imageURL).default
					}
					alt="First slide"
				></img>
			</div>
		);
	});
	return ReactDom.createPortal(
		<Overlay>
			<Wrapper>
				<div
					id="carouselExampleControls"
					className="carousel slide"
					data-ride="carousel"
				>
					<div className="carousel-inner">{listImages}</div>
					<a
						className="carousel-control-prev"
						href="#carouselExampleControls"
						role="button"
						data-slide="prev"
					>
						<span
							className="carousel-control-prev-icon bg-dark"
							aria-hidden="true"
						></span>
					</a>
					<a
						className="carousel-control-next"
						href="#carouselExampleControls"
						role="button"
						data-slide="next"
					>
						<span className="carousel-control-next-icon bg-dark"></span>
					</a>

					<CloseButton onClick={onClose}>Close</CloseButton>
				</div>
			</Wrapper>
		</Overlay>,
		document.getElementById('modal')
	);
};

const Wrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	width: 100%;
	transform: translate(-50%, -50%);
	max-width: 60vh;
`;

const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
`;

const CloseButton = styled.button`
	position: absolute;
	top: 0px;
	right: 0px;
	z-index: 4;
	background-color: #555555;
	line-height: initial;
	border-radius: 2px;
	color: white;
	padding: 0.2rem;
	opacity: 0.5;
`;

export default ModalCarousel;
