// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const CommentSection = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [commenterName, setCommenterName] = useState("");
    const [commenterPicture, setCommenterPicture] = useState(""); // You can store the picture URL here

    const handleCommentChange = (e) => {
      setNewComment(e.target.value);
    };

    const handleNameChange = (e) => {
      setCommenterName(e.target.value);
    };

    const handlePictureChange = (e) => {
      setCommenterPicture(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (newComment.trim() !== "") {
        // Create a new comment object including the name and picture
        const newCommentObj = {
          name: commenterName,
          picture: commenterPicture,
          comment: newComment,
        };

        // Add the new comment to the comments array
        setComments([...comments, newCommentObj]);

        // Clear the comment input
        setNewComment("");

        // Clear the name and picture input
        setCommenterName("");
        setCommenterPicture("");
      }
    };

  return (
    <div>
        <h2>Comments</h2>
        <div className="space-y-4">
        {comments.map((comment, index) => (
            <div key={index}>
            {/* Display the commenter's name and picture */}
            <div>
            <div className='flex flex-col'>
                <div className='w-[50px]'>
                    <img src={comment.picture} alt={comment.name} className='rounded-full' />
                </div>
                <div className='flex items-start bg-gray-100 p-2 rounded-lg'>
                <strong>{comment.name}</strong>
                {comment.comment}
                </div>
            </div>
            </div>
            
            </div>
        ))}
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
        <input
            type="text"
            placeholder="Your Name"
            value={commenterName}
            onChange={handleNameChange}
            className="w-full p-2 border rounded-lg"
        />
        <input
            type="text"
            placeholder="Your Picture URL"
            value={commenterPicture}
            onChange={handlePictureChange}
            className="w-full p-2 border rounded-lg"
        />
        <textarea
            rows="4"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-2 border rounded-lg"
        ></textarea>
        <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
            Post Comment
        </button>
        </form>
  </div>
  );
};

export default CommentSection;
