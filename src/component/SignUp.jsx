import React, { useState } from 'react';
import { Link } from 'react-router';
import MyContainer from './MyContainer';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';
import { toast } from 'react-toastify';
import { FaEye } from 'react-icons/fa';
import { FiEyeOff } from 'react-icons/fi';

const SignUp = () => {
    const [show, setShow] = useState(true)

    const handlePasswordHide = () => {
        setShow(!show)
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


        if (!passwordRegex.test(password)) {
            toast.error("Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.")
            return
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                toast.success("Your Account has been created")
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("❌ This email is already in use. Try logging in.");
                } else if (error.code === "auth/invalid-email") {
                    toast.error("⚠️ Please enter a valid email address.");
                } else if (error.code === "auth/weak-password") {
                    toast.error("🔒 Password is too weak. Use at least 6 characters.");
                } else if (error.code === "auth/missing-email") {
                    toast.error("📧 Email is required.");
                } else if (error.code === "auth/missing-password") {
                    toast.error("🔑 Password is required.");
                } else {
                    toast.error("❗ Something went wrong. Please try again.");
                    console.log(error.code);
                }
            })
    }




    return (
        <div className="min-h-[96vh] flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden">
            {/* Animated floating circles */}
            <div className="absolute inset-0">
                <div className="absolute w-72 h-72 bg-pink-400/30 rounded-full blur-2xl top-10 left-10 animate-pulse"></div>
                <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-2xl bottom-10 right-10 animate-pulse"></div>
            </div>

            <MyContainer>
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 text-white">
                    <div className="max-w-lg text-center lg:text-left">
                        <h1 className="text-5xl font-extrabold drop-shadow-lg">
                            Create Your Account
                        </h1>
                        <p className="mt-4 text-lg text-white/80 leading-relaxed">
                            Join our community and unlock exclusive features. Your journey
                            begins here!
                        </p>
                    </div>

                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">
                        <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                            Sign Up
                        </h2>

                        <form onSubmit={handleSignUp} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm font-medium mb-1">
                                    Password
                                </label>
                                <input
                                    type={show ? "password" : "text"}
                                    name='password'
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                                <span onClick={handlePasswordHide} className='absolute right-2 top-9 cursor-pointer z-10'>
                                    {show ? <FiEyeOff></FiEyeOff> : <FaEye></FaEye>}
                                </span>
                            </div>
                            <button type="submit" className="my-btn">
                                Sign Up
                            </button>

                            <div className="text-center mt-3">
                                <p className="text-sm text-white/80">
                                    Already have an account?{" "}
                                    <Link
                                        to="/signin"
                                        className="text-pink-300 hover:text-white font-medium underline"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default SignUp;