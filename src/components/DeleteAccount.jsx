import React from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { logout } from "../slices/userslice";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const user = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete(`https://fakestoreapi.com/users/${user.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        dispatch(logout());
        sessionStorage.clear();
        navigate("/register");
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  return <button onClick={handleDelete}>Delete Account</button>;
};

export default DeleteAccount;
