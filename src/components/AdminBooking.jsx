// eslint-disable-next-line no-unused-vars
import React from 'react';
import AdminDashboard from './AdminDashboard';

const AdminBooking = () => {
  return (
    <div className='flex flex-row'>
        <div>
            <AdminDashboard/>
        </div>
        <div className='h-[2000px] mt-10 pl-14 2xl:pl-5 '>
            <h1>Bookings</h1>
        </div>
    </div>
  )
}

export default AdminBooking
