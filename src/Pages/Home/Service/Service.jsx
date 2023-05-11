import { useContext } from 'react';
import ServiceCard from './ServiceCard';
import { AuthContext } from '../../../provider/AuthProvider';

const Service = () => {
	const {services} = useContext(AuthContext)
    return (
		<div className='text-center relative mb-[100px]'>
			<div className='md:w-1/2 mx-auto'>
				<h4 className='text-2xl font-bold text-[#FF3811]'>About Us</h4>
				<h1 className='text-3xl md:text-5xl font-bold mt-3 mb-5'>
					Our Service Area
				</h1>
				<p>
					the majority have suffered alteration in some form, by
					injected humour, or randomised words which do not look even
					slightly believable.{" "}
				</p>
			</div>

			<div className='grid md:grid-cols-3 gap-5 md:gap-6'>
				{services.map(service => (
					<ServiceCard
						key={service._id}
						service={service}
					></ServiceCard>
				))}
			</div>

			<button className='btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-transparent hover:text-[#FF3811] mt-[40px]'>
				Latest Project
			</button>
		</div>
	);
};

export default Service;