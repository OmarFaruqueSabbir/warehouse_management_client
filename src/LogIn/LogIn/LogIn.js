import axios from 'axios';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const LogIn = () => {
    const emailRef = useRef("");
    const passRef = useRef("");

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(
        auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const gotoRegister = () => {
        navigate('/register');
    }

    let errorMessage;

    if (error) {
        errorMessage =
            <p className='text-red-600'>Error: {error?.message}
            </p>
    }

    const handleLogIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passRef.current.value;

       await signInWithEmailAndPassword(email, password);

       const {data} = await axios.post('http://localhost:5000/login',{email})
       localStorage.setItem('accessToken',data.accessToken);

       navigate(from,{replace:true})

    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email sent for reset');
        } else {
            toast('please enter your mail');
        }
    }

    return (

            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Welcome, Log In Here...   </h1>

                    <form onSubmit={handleLogIn} action="" className="p-2 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                        <p className="text-lg text-indigo-600 font-medium">Login in to your account</p>

                        <div>
                            <label for="email" className="text-sm text-left font-medium">Email</label>

                            <div className="relative mt-1">
                                <input ref={emailRef}
                                    type="email"
                                    id="email"
                                    name='email'
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 inline-flex items-center right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" className="text-sm font-medium">Password</label>

                            <div className="relative mt-1">
                                <input ref={passRef}
                                    type="password"
                                    id="password"
                                    name='password'
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 inline-flex items-center right-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button type="submit" className="block text-base w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                            Sign in
                        </button>


                        <p className="text-gray-400 hover:text-blue-500" >New Here? <span onClick={gotoRegister} className='text-primary pl-2'>
                            Please Register</span>  </p>
                        {
                            errorMessage
                        }
                        <p className="text-gray-400 hover:text-blue-500" >Forgot Password? <span onClick={resetPassword} className='text-primary pl-2'>
                            Reset your Password</span>  </p>
                            <ToastContainer />
                        <SocialLogin />
                    </form>

                </div>


            </div>
    );
};

export default LogIn;