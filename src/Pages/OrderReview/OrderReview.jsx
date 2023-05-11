import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import OrdersRow from './OrdersRow';

const OrderReview = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/booking?email=${user?.email}`;
    const [services, setServices] = useState([]);

    useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setServices(data));
    }, [url]);
    
    return (
		<div className='overflow-x-auto w-full'>
			<table className='table w-full'>
				{/* head */}
				<thead>
					<tr>
						<th>
							<label>
								<input
									type='checkbox'
									className='checkbox'
								/>
							</label>
						</th>
						<th>Name</th>
						<th>Job</th>
						<th>Favorite Color</th>
						<th>Favorite Color</th>
						<th></th>
					</tr>
				</thead>
                <tbody>{services.map(booking => <OrdersRow
                    key={booking._id}
                    booking={booking}
                ></OrdersRow>)}</tbody>
			</table>
		</div>
	);
};

export default OrderReview;