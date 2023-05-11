import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
	const { handelSingIn } = useContext(AuthContext);

	const navigation = useNavigate();
	const handelLogin = e => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		handelSingIn(email, password)
			.then(user => {
				form.reset();
				navigation('/');
			})
			.catch(error => {
				console.log(error.message);
			});
	}
    return (
		<div className='hero min-h-screen bg-base-200'>
			<div className='hero-content flex-cols lg:flex-row w-full'>
				<div
					className='text-center lg:text-left  
                md:w-1/2'
				>
					<img
						src={img}
						alt=''
					/>
				</div>

				<div className='card  md:w-1/2  shadow-2xl bg-base-100'>
					<div className='card-body'>
						<h1 className='text-5xl font-bold text-center'>
							Login
						</h1>
						<form onSubmit={handelLogin}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Email</span>
								</label>
								<input
									type='text'
									placeholder='email'
									className='input input-bordered'
									name='email'
								/>
							</div>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Password</span>
								</label>
								<input
									type='text'
									placeholder='password'
									className='input input-bordered'
									name='password'
								/>
								<label className='label'>
									<a
										href='#'
										className='label-text-alt link link-hover'
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className='form-control mt-6'>
								
								<input
									type='submit'
									value='Sign in'
									className='btn bg-[#FF3811] border-none hover:bg-[#f02f08]'
								/>
							</div>
						</form>
						<div>
							<p className='text-center mt-6'>Or Sing In With</p>

							<div className='flex items-center justify-center gap-4 my-6'>
								<button className='w-[55px] h-[55px] flex items-center justify-center bg-[#F5F5F8] rounded-full text-[#3B5998]'>
									<FaFacebookF />
								</button>
								<button className='w-[55px] h-[55px] flex items-center justify-center bg-[#F5F5F8] rounded-full text-[#0B71D0]'>
									<FaLinkedinIn />
								</button>
								<button className='w-[55px] h-[55px] flex items-center justify-center bg-[#F5F5F8] rounded-full text-[#0B71D0]'>
									<FaGoogle />
								</button>
							</div>
							<p className='text-center'>
								Have an account?{" "}
								<Link
									to={"/sing-up"}
									className='text-[#FF3811] font-bold'
								>
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;