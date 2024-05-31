import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateUser } from "../slices/userslice";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://fakestoreapi.com/users/${user.id}`,
        { username, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(updateUser(response.data));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default Profile;
