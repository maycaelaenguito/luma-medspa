// eslint-disable-next-line no-unused-vars
import React from 'react';
import AdminSideNav from './AdminSideNav';

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <main className="w-full">
        <div className="grid grid-cols-6">
            <div className="col-span-1 bg-gray-800 font-raleway">
                <AdminSideNav/>
            </div>
            <div className="col-span-5 bg-gray-50 h-[2000px] p-2">
                <h1>Article Title</h1>
                <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
                veniam accusamus aut maxime. Quia hic, tempora quod dolorem,
                exercitationem aliquid deleniti esse vel atque impedit, sapiente
                quis. Beatae, deserunt molestias!
                </p>
            </div>
        </div>
      </main>
    </div>
  )
}

export default AdminDashboard
