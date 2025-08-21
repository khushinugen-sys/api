// import { useState } from "react";

import UseSendData from "../hooks/UseSendData";

const Login = () => {
  //   const [email,setEmail]=useState<any>('')
  //   const [password,setPassword]=useState<any>('')
  //   const [message,setMessage]=useState<string|null>(null)

  //  async function handleSubmit (e: { preventDefault: any; }){
  //       e.preventDefault();
  //       const NEXT_PUBLIC_API_URL="http://192.168.29.100:9009";
  //       const apires= await fetch(`${NEXT_PUBLIC_API_URL}/auth/email/login`,
  //         {
  //            method: 'POST',
  //            headers: {
  //                   'Content-Type': 'application/json',
  //            },
  //            body: JSON.stringify({password,email}),
  //         }
  //       )
  //       if(apires.ok)
  //       {
  //         const res= await apires.json()
  //         console.log(res)
  //         setMessage("✔️Login Sucessful")
  //       }
  //       else{
  //         if(apires.status === 401)
  //         {
  //             setMessage("✔️Invalid Email or Password")
  //         }
  //       }
  //   }

  const {email,setEmail,password,setPassword,message,handleSubmit}=UseSendData()

    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Login
          </h2>
          <div className="flex justify-center text-center">
            {message}
          </div>
            
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input onChange={(e)=>{setEmail(e.target.value)}}
                type="email"
                placeholder="you@example.com"
                value={email}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input onChange={(e)=>{setPassword(e.target.value)}}
                type="password"
                placeholder="••••••••"
                value={password}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Don’t have an account?
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  };

export default Login;
