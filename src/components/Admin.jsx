// eslint-disable-next-line no-unused-vars
import React from 'react';

const Admin = () => {
  return (
    <div className='w-full h-screen bg-admin bg-cover bg-no-repeat bg-center flex justify-center items-center font-raleway '>
      <div className='h-auto w-[90%] sm:w-max bg-white rounded-lg'>
        <div className='font-medium text-center text-2xl sm:text-3xl tracking-wide py-5 rounded-t-lg shadow-md w-full'>
            <h1>LUMA <span className='text-[#F2A8A6]'>Medspa</span></h1>
        </div>
        <div className='py-5 px-5 sm:px-10'>
            <form className="sm:px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    <p className="text-red-500 text-xs italic">Please type your password.</p>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <button className="w-full bg-[#F2A8A6] hover:bg-[#fb9a97] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Log In
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2023 LUMA Medspa. All rights reserved.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Admin
