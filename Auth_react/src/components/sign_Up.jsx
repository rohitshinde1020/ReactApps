import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Sign_Up = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const user = { email: email, password: password };

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const exits = users.find((u) => u.email === email);
        if (exits) {
            alert("user already exit");
            return;
        }
        else {
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users));
        }

        alert("Signup Successful!");
        navigate("/");
    }

    return (
        <div className='border-2 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] flex flex-row  bg-gray-800  shadow-black shadow-xl rounded-2xl'>
            <div className='flex justify-center items-center object-cover'>
                <img src="https://imgs.search.brave.com/z6ZK8Cjd5HDuUC-9B4vzvIm0krmLOEAqxlI01djeFL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvZW50ZXIt/bG9naW4tcGFzc3dv/cmQtaW4tbW9iaWxl/LWlsbHVzdHJhdGlv/bi1zdmctZG93bmxv/YWQtcG5nLTExODA0/Mjc1LnBuZw" alt="" 
                className='h-[300px]'/>
            </div>
            <div  className=' w-[350px] h-[400px]   px-5 py-12 flex flex-col justify-center gap-5 rounded-2xl text-white ' >
                <h1 className='text-3xl font-semibold'>Create An Account</h1>
                <div>
                    <p className='text-sm '>Already Have An Account ? <Link to='/' className='underline underline-offset-2 font-semibold'>Login</Link></p>
                </div>
                <form onSubmit={handlesubmit} className='flex flex-col justify-center gap-4'>
                    <div>
                        <label htmlFor="email" className='mb-4'>Email ID</label><br />
                        <input type="email" placeholder='Enter Email ID' onChange={(e) => setemail(e.target.value)} value={email} className='w-full py-1 outline-none placeholder:text-gray-400' />
                    </div>
                    <div>
                        <label htmlFor="password" className='mb-4'>Password</label><br />
                        <input type="password" placeholder='Enter Password' onChange={(e) => setpassword(e.target.value)} value={password} className='w-full py-1 outline-none ' />
                    </div>
                    <button type='submit' className='bg-black text-white py-2 rounded-2xl'>Create Account</button>
                </form>


            </div>
        </div>

    )
}

export default Sign_Up
