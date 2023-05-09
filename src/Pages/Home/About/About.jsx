import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
		<div className='md:py-[100px] py-5'>
			<div className=''>
				<div className='md:hero-content flex-col lg:flex-row'>
					<div className='md:w-1/2 my-[10px] relative'>
						<img
							src={person}
							className='w-full rounded-lg shadow-2xl'
						/>
						<img
							src={parts}
							className=' rounded-lg shadow-2xl w-[330px] border-8 border-white absolute -right-5 -bottom-5 hidden md:block'
						/>
					</div>
					<div className='md:w-1/2 flex-1 ml-[10px] md:ml-10'>
						<h4 className='text-2xl font-bold text-[#FF3811]'>
							About Us
						</h4>
						<h1 className='text-3xl md:text-5xl font-bold md:w-2/3 mt-3 mb-5'>
							We are qualified & of experience in this field
						</h1>
						<p className='pb-4'>
							There are many variations of passages of Lorem Ipsum
							available, but the majority have suffered alteration
							in some form, by injected humour, or randomised
							words which do not look even slightly believable.
						</p>
						<p className='pb-4'>
							the majority have suffered alteration in some form,
							by injected humour, or randomised words which do not
							look even slightly believable.
						</p>
						<button className='btn bg-[#FF3811] hover:bg-[#ff3811]'>
							Get More Info
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;