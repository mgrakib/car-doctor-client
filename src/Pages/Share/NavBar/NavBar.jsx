import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { FaSearch, FaShoppingBag } from "react-icons/fa";
const NavBar = () => {
    const navItems = (
		<>
			<li className='text-[#444444] font-bold'>
				<Link>Home</Link>
			</li>

			<li className='text-[#444444] font-bold'>
				<Link>About</Link>
			</li>
			<li className='text-[#444444] font-bold'>
				<Link>Services</Link>
			</li>
			<li className='text-[#444444] font-bold'>
				<Link>Blog</Link>
			</li>
			<li className='text-[#444444] font-bold'>
				<Link>Contact</Link>
			</li>
		</>
	);
    return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label
						tabIndex={0}
						className='btn btn-ghost lg:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						{navItems}
					</ul>
				</div>
				<Link className=''>
					<img
						src={logo}
						alt=''
					/>
				</Link>
			</div>
			<div className='navbar-center hidden lg:flex'>
				<ul className='menu menu-horizontal px-1'>{navItems}</ul>
			</div>
			<div className='navbar-end space-x-6'>
				<span className='text-[#444444]'>
					<FaShoppingBag />{" "}
				</span>
				<span className='text-[#444444]'>
					<FaSearch />{" "}
				</span>
				<a className=' border border-[#FF3811] text-[#FF3811] font-bold rounded-md w-[140px] h-[46px] flex items-center justify-center'>
					Get started
				</a>
			</div>
		</div>
	);
};

export default NavBar;