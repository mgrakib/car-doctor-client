import React from 'react';

const OrdersRow = ({ booking }) => {
    console.log(booking);
    const { serviceImg, userName, email, date, time, price, status } = booking;
	return (
		<tr>
			<th>
				<label>
					<input
						type='checkbox'
						className='checkbox'
					/>
				</label>
			</th>
			<td>
				<div className='flex items-center space-x-3'>
					<div className='avatar'>
						<div className='mask mask-squircle w-12 h-12'>
							<img
								src={serviceImg}
								alt='Avatar Tailwind CSS Component'
							/>
						</div>
					</div>
					<div>
						<div className='font-bold'>{userName}</div>
					</div>
				</div>
			</td>
			<td>{email}</td>
			<td>
				<div className='font-bold'>{date}</div>
				<div className='text-sm opacity-50'>{time}</div>
			</td>
			<td>
				<div className='font-bold'>{price}</div>
				<div className='text-sm opacity-50'>{time}</div>
			</td>
			<th>
				<button
					className={`btn btn-ghost btn-xs text-white ${status === "Pending" ? 'bg-red-500' : 'bg-green-500'}`}
				>
					{status}
				</button>
			</th>
		</tr>
	);
};

export default OrdersRow;