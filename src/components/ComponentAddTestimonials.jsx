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

  const handleEdit = (index) => {
    const clientToEdit = clients[index];
    setClientData(clientToEdit);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedClients = [...clients];
    updatedClients.splice(index, 1);

    // Send a delete request to your backend if needed.
    // Example: axios.delete(`/api/clients/${client.id}`);

    setClients(updatedClients);
  };

  return (
    <div className="container mx-auto p-4">
      <div className='grid lg:grid-cols-3 gap-5'>
        {/* Form */}
        <form className='lg:rid-cols-1' onSubmit={handleSubmit}>
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
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {isEditing ? 'Update' : 'Post'}
            </button>
          </form>
          {/* Testimonials */}
          <div className="mt-8 lg:grid-cols-2">
            {clients.map((client, index) => (
              <div key={index} className="mb-4">
                <div className="bg-gray-100 p-4 rounded">
                  <p className="font-semibold">{client.name}</p>
                  <p>{client.comment}</p>
                  {client.image && (
                    <img
                      src={URL.createObjectURL(client.image)}
                      alt={client.name}
                      className="mt-2 max-w-full"
                    />
                  )}
                </div>
                <div className="mt-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default ComponentAddTestimonials;
