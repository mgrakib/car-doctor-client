/** @format */

import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
	const { handelSingUp, setUserNamePhoto } = useContext(AuthContext);
	const [error, setError] = useState('')

	const handelNewUserCreate = e => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		handelSingUp(email, password)
			.then(user => {
				setUserNamePhoto(name)
					.then(() => {
						Swal.fire({
							icon: "success",
							title: "Success",
							text: "User created successfully",
							footer: '<a href="">Why do I have this issue?</a>',
						});
						form.reset();
					})
					.catch(error => {
						setError(error.message);
					});
				
			})
			.catch(error => {
				setError(error.message)
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
							Sign Up
						</h1>
						<form onSubmit={handelNewUserCreate}>
							<div className='form-control'>
								<label className='label'>
									<span className='label-text'>Name</span>
								</label>
								<input
									type='text'
									placeholder='name'
									className='input input-bordered'
									name='name'
								/>
							</div>
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
							</div>
							<div className='form-control mt-6'>
								<input
									type='submit'
									className='btn bg-[#FF3811] border-none hover:bg-[#f02f08]'
									value='Sign Up'
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
								Already have an account?{" "}
								<Link
									to={"/login"}
									className='text-[#FF3811] font-bold'
								>
									Login
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
