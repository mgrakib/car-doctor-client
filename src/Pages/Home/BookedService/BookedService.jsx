import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const BookedService = () => {
    const { user } = useContext(AuthContext);
	const service = useLoaderData();
	console.log(service);
	const {_id, price, img, service_id } = service;
	
	const handelOrderConfirm= e =>  {
		e.preventDefault();
		const form = e.target;

		const name = form.name.value;
		const date = form.date.value;
		const email = form.email.value;
		const time = form.time.value;
		const serviceImg = form.serviceImg.value;
		const price = form.price.value;
		const message = form.message.value;


		const orderDetails = {
			userName: name,
			date,
			email,
			time,
			serviceImg,
			price,
			message,
			servideId: service_id,
			status:'Pending'
		};
		console.log(orderDetails);
		
		fetch(`http://localhost:5000/booked-service/${_id}`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(orderDetails),
		})
			.then(res => res.json())
			.then(data => console.log(data));
		
		
	}
    
    return (
		<div className='hero min-h-screen bg-base-200 px-16'>
			<form
				onSubmit={handelOrderConfirm}
				className='w-full'
			>
				<div className='grid md:grid-cols-2 gap-10 '>
					<div className=''>
						<label className='label'>
							<span className='label-text'>User Name</span>
						</label>
						<input
							type='text'
							placeholder=''
							className='input input-bordered w-full'
							defaultValue={user?.displayName}
							name='name'
						/>
					</div>
					<div>
						<label className='label'>
							<span className='label-text'>Date</span>
						</label>
						<input
							type='date'
							placeholder='email'
							className='input input-bordered w-full'
							name='date'
						/>
					</div>
				</div>

				<div className='grid md:grid-cols-2 gap-10 '>
					<div className=''>
						<label className='label'>
							<span className='label-text'>User email</span>
						</label>
						<input
							type='text'
							placeholder=''
							className='input input-bordered w-full'
							defaultValue={user?.email}
							name='email'
						/>
					</div>
					<div>
						<label className='label'>
							<span className='label-text'>Time</span>
						</label>
						<input
							type='time'
							placeholder='time'
							className='input input-bordered w-full'
							name='time'
						/>
					</div>
				</div>
				<div className='grid md:grid-cols-2 gap-10 '>
					<div className=''>
						<label className='label'>
							<span className='label-text'>Image</span>
						</label>
						<input
							type='text'
							placeholder=''
							className='input input-bordered w-full'
							defaultValue={img}
							name='serviceImg'
						/>
					</div>
					<div>
						<label className='label'>
							<span className='label-text'>Price</span>
						</label>
						<input
							type='text'
							placeholder='price'
							className='input input-bordered w-full'
							defaultValue={`$${price}`}
							name='price'
						/>
					</div>
				</div>
				<div className='mt-5'>
					<textarea
						name='message'
						id=''
						className='w-full h-[200px] p-2'
					></textarea>
				</div>
				<div>
					<input
						type='submit'
						value='Order Confirm'
						className='py-4 bg-orange-600 w-full rounded-md mt-6 cursor-pointer text-white'
					/>
				</div>
			</form>
		</div>
	);
};

export default BookedService;