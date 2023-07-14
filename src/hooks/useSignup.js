import React from "react";
import { useState, useEffect } from "react";
import { SignupAuth } from "../store/signupSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName,setDisplayName]=useState('')
    const success = useSelector((state) => state.SignupSlice.success);
  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);
  const signupUser = (e) => {
    e.preventDefault();
    dispatch(SignupAuth({ email, password,displayName }));
  };
  return { signupUser, email, setEmail, password, setPassword ,displayName,setDisplayName};
};
export default useSignup;
