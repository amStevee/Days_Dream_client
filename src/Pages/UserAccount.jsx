import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import User from "../styles/UserAccount.styled";

export default function UserAccount() {
  const { currentUser } = useContext(AuthContext);
  return (
    <User>
      <p>{currentUser.username}</p>
    </User>
  );
}
