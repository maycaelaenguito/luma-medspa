// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import axios from 'axios'; // If you are using a backend for storing data.

function ComponentAddTestimonials() {
  const [clientData, setClientData] = useState({
    name: '',
    comment: '',
    image: null,
  });

  const [clients, setClients] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setClientData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditing && editIndex !== null) {
      // Update the existing client data.
      const updatedClients = [...clients];
      updatedClients[editIndex] = clientData;

      // Send the updated data to your backend if needed.
      // Example: axios.put('/api/clients', clientData);

      setClients(updatedClients);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Add a new client data.
      const newClients = [...clients, clientData];

      // Send the new data to your backend if needed.
      // Example: axios.post('/api/clients', clientData);

      setClients(newClients);
    }

    // Clear the input fields.
    setClientData({
      name: '',
      comment: '',
      image: null,
    });
  };

  const handleDelete = (index) => {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);

    // Send a delete request to your backend if needed.
    // Example: axios.delete(`/api/clients/${client.id}`);

    setClients(updatedClients);
  };

  return (
    <div className="container mx-auto p-4 focus:outline-none">
      <div className='grid lg:grid-cols-3 gap-5'>
        {/* Form */}
       <div className='lg:col-span-1'>
          <form  onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Client Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border rounded w-full py-2 px-3"
                value={clientData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="comment">
                Testimonial
              </label>
              <textarea
                name="comment"
                id="comment"
                className="border rounded w-full py-2 px-3"
                value={clientData.comment}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="image">
                Image
              </label>
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {isEditing ? 'Update' : 'Post'}
            </button>
          </form>
       </div>
          {/* Testimonials */}
          <div className="mt-8 lg:col-span-2">
            {clients.map((client, index) => (
              <div key={index} className="mb-4 flex flex-row gap-2 ">
                <div className="flex flex-row-reverse gap-2 px-8 py-4 border-[1px] border-gray-300 rounded-md">
                  <div className=' w-[35vw] pt-3'>
                    <div className='cursor-pointer flex flex-row gap-3'>
                      <p className="font-semibold">{client.name}</p>
                      <div className=' text-sm'>
                        <button className='hover:underline'>Edit</button>
                      </div>
                    </div>
                    <div className='cursor-pointer flex flex-row gap-3'>
                      <div className=' rounded-md'>
                        <p>{client.comment}</p>
                      </div>
                      <div className=' text-sm'>
                        <button className='hover:underline'>Edit</button>
                      </div>
                    </div>
                  </div>
                  <div >
                      <button>
                        <div className='cursor-pointer relative group'>
                          {client.image && (
                            <img
                              src={URL.createObjectURL(client.image)}
                              alt={client.name}
                              className="mt-2 w-[100px] rounded-full group-hover:brightness-75"
                            />
                          )}
                           <div className='absolute top-9 left-8 text-white'>
                            <button className='hidden group-hover:flex hover:underline'>Edit</button>
                           </div>
                        </div>
                      </button>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-sm">
                  <div className='flex flex-row gap-3'>
                    <button
                      onClick={() => handleDelete(index)}
                      className="hover:underline"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className=" hover:underline"
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default ComponentAddTestimonials;
