import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {_id, img, title, price } = service;
    return (
		<div className='card bg-base-100 shadow-xl'>
			<figure className='px-10 pt-10'>
				<img
					src={img}
					alt='Shoes'
					className='rounded-xl'
				/>
			</figure>
			<div className='card-body text-left'>
				<h2 className='text-2xl font-bold text-left'>{title}</h2>
				<p>Price : ${price}</p>
				<div className='card-actions'>
					<Link to={`/booked-service/${_id}`}>
						<button className='btn btn-primary'>
							Booked Service
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;