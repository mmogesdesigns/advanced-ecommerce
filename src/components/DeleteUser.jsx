import React, {useContext,useState} from 'react';
import axios from 'axios';

function DeleteUser() {
   const [message, setMessage] = setMessage('');
     const handleDelete = async () => {
    try {
      const response = await axios.delete('https://fakestoreapi.com/users/1');
      if (response.status === 200) {
        setMessage('User deleted successfully');
      } else {
        setMessage('Failed to delete user');
      }
    } catch (error) {
      setMessage('An error occurred: ' + error.message);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
}

export default DeleteUser;
