import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();


    let errorElement;
    if(error){
        errorElement =
        <p className='text-red-700 '>Error: {error?.message}
        </p>
    }
    if(user){
        navigate('/home')
    }
    return (
        <>
            <p className='text-gray-700 font-semibold'>Or sign up with:</p>
            {
                errorElement
            }
            <button onClick={() => signInWithGoogle()} type="button" className="flex items-center justify-center h-12 px-6 w-full bg-gray-700 mt-2 rounded font-semibold text-sm text-blue-100 hover:bg-gray-800">
                <FcGoogle style={{height:'50px'}} />
                <span className='pl-2 text-base'>Google Sign In</span> 
            </button>
        </>
    );
};

export default SocialLogin;