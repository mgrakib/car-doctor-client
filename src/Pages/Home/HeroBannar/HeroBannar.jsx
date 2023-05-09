import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'


const HeroBannar = () => {
    return (
		<div className='carousel w-full h-[600px]'>
			<div
				id='slide1'
				className='carousel-item relative w-full  rounded-lg overflow-hidden'
			>
				<img
					src={img1}
					className='w-full object-cover'
				/>

				{/* text 1 */}
				<div className='absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] flex items-center'>
					<div className='text-white md:w-1/2 ml-[10px] md:ml-[80px] space-y-7'>
						<h1 className='text-4xl md:text-6xl font-bold'>
							Affordable <br /> Price For Car <br /> Servicing
						</h1>
						<p className='text-[16px] md:text-[18px] md:w-3/4'>
							There are many variations of passages of available,
							but the majority have suffered alteration in some
							form
						</p>
						<div className='space-x-5'>
							<button className='btn bg-[#FF3811] hover:bg-[#ff3811]'>
								Discover More
							</button>
							<button className='btn btn-outline border-white text-white hover:bg-transparent'>
								Latest Project
							</button>
						</div>
					</div>
				</div>

				{/* side change btn  */}
				<div className='absolute flex gap-[20px]  right-1/2 translate-x-1/2 md:translate-x-0 md:right-[50px] bottom-[20px] md:bottom-[50px]'>
					<a
						href='#slide6'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❮
					</a>
					<a
						href='#slide2'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❯
					</a>
				</div>
			</div>

			<div
				id='slide2'
				className='carousel-item relative w-full  rounded-lg overflow-hidden'
			>
				<img
					src={img2}
					className='w-full object-cover'
				/>

				{/* text 1 */}
				<div className='absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] flex items-center'>
					<div className='text-white md:w-1/2 ml-[10px] md:ml-[80px] space-y-7'>
						<h1 className='text-4xl md:text-6xl font-bold'>
							Affordable <br /> Price For Car <br /> Servicing
						</h1>
						<p className='text-[16px] md:text-[18px] md:w-3/4'>
							There are many variations of passages of available,
							but the majority have suffered alteration in some
							form
						</p>
						<div className='space-x-5'>
							<button className='btn bg-[#FF3811] hover:bg-[#ff3811]'>
								Discover More
							</button>
							<button className='btn btn-outline border-white text-white hover:bg-transparent'>
								Latest Project
							</button>
						</div>
					</div>
				</div>

				{/* side change btn  */}
				<div className='absolute flex gap-[20px]  right-1/2 translate-x-1/2 md:translate-x-0 md:right-[50px] bottom-[20px] md:bottom-[50px]'>
					<a
						href='#slide1'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❮
					</a>
					<a
						href='#slide3'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide3'
				className='carousel-item relative w-full  rounded-lg overflow-hidden'
			>
				<img
					src={img3}
					className='w-full object-cover'
				/>

				{/* text 1 */}
				<div className='absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] flex items-center'>
					<div className='text-white md:w-1/2 ml-[10px] md:ml-[80px] space-y-7'>
						<h1 className='text-4xl md:text-6xl font-bold'>
							Affordable <br /> Price For Car <br /> Servicing
						</h1>
						<p className='text-[16px] md:text-[18px] md:w-3/4'>
							There are many variations of passages of available,
							but the majority have suffered alteration in some
							form
						</p>
						<div className='space-x-5'>
							<button className='btn bg-[#FF3811] hover:bg-[#ff3811]'>
								Discover More
							</button>
							<button className='btn btn-outline border-white text-white hover:bg-transparent'>
								Latest Project
							</button>
						</div>
					</div>
				</div>

				{/* side change btn  */}
				<div className='absolute flex gap-[20px]  right-1/2 translate-x-1/2 md:translate-x-0 md:right-[50px] bottom-[20px] md:bottom-[50px]'>
					<a
						href='#slide2'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❮
					</a>
					<a
						href='#slide4'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide4'
				className='carousel-item relative w-full  rounded-lg overflow-hidden'
			>
				<img
					src={img4}
					className='w-full object-cover'
				/>

				{/* text 1 */}
				<div className='absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] flex items-center'>
					<div className='text-white md:w-1/2 ml-[10px] md:ml-[80px] space-y-7'>
						<h1 className='text-4xl md:text-6xl font-bold'>
							Affordable <br /> Price For Car <br /> Servicing
						</h1>
						<p className='text-[16px] md:text-[18px] md:w-3/4'>
							There are many variations of passages of available,
							but the majority have suffered alteration in some
							form
						</p>
						<div className='space-x-5'>
							<button className='btn bg-[#FF3811] hover:bg-[#ff3811]'>
								Discover More
							</button>
							<button className='btn btn-outline border-white text-white hover:bg-transparent'>
								Latest Project
							</button>
						</div>
					</div>
				</div>

				{/* side change btn  */}
				<div className='absolute flex gap-[20px]  right-1/2 translate-x-1/2 md:translate-x-0 md:right-[50px] bottom-[20px] md:bottom-[50px]'>
					<a
						href='#slide3'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❮
					</a>
					<a
						href='#slide5'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide5'
				className='carousel-item relative w-full  rounded-lg overflow-hidden'
			>
				<img
					src={img5}
					className='w-full object-cover'
				/>

				{/* text 1 */}
				<div className='absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] flex items-center'>
					<div className='text-white md:w-1/2 ml-[10px] md:ml-[80px] space-y-7'>
						<h1 className='text-4xl md:text-6xl font-bold'>
							Affordable <br /> Price For Car <br /> Servicing
						</h1>
						<p className='text-[16px] md:text-[18px] md:w-3/4'>
							There are many variations of passages of available,
							but the majority have suffered alteration in some
							form
						</p>
						<div className='space-x-5'>
							<button className='btn bg-[#FF3811] hover:bg-[#ff3811]'>
								Discover More
							</button>
							<button className='btn btn-outline border-white text-white hover:bg-transparent'>
								Latest Project
							</button>
						</div>
					</div>
				</div>

				{/* side change btn  */}
				<div className='absolute flex gap-[20px]  right-1/2 translate-x-1/2 md:translate-x-0 md:right-[50px] bottom-[20px] md:bottom-[50px]'>
					<a
						href='#slide4'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❮
					</a>
					<a
						href='#slide6'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❯
					</a>
				</div>
			</div>
			<div
				id='slide6'
				className='carousel-item relative w-full  rounded-lg overflow-hidden'
			>
				<img
					src={img6}
					className='w-full object-cover'
				/>

				{/* text 1 */}
				<div className='absolute w-full h-full bg-gradient-to-r from-[#151515] to-[#15151500] flex items-center'>
					<div className='text-white md:w-1/2 ml-[10px] md:ml-[80px] space-y-7'>
						<h1 className='text-4xl md:text-6xl font-bold'>
							Affordable <br /> Price For Car <br /> Servicing
						</h1>
						<p className='text-[16px] md:text-[18px] md:w-3/4'>
							There are many variations of passages of available,
							but the majority have suffered alteration in some
							form
						</p>
						<div className='space-x-5'>
							<button className='btn bg-[#FF3811] hover:bg-[#ff3811]'>
								Discover More
							</button>
							<button className='btn btn-outline border-white text-white hover:bg-transparent'>
								Latest Project
							</button>
						</div>
					</div>
				</div>

				{/* side change btn  */}
				<div className='absolute flex gap-[20px]  right-1/2 translate-x-1/2 md:translate-x-0 md:right-[50px] bottom-[20px] md:bottom-[50px]'>
					<a
						href='#slide5'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❮
					</a>
					<a
						href='#slide1'
						className='btn hover:bg-[#FF3811] btn-circle'
					>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

export default HeroBannar;