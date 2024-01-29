import React from "react";
import "./signOut.css";
import { UilSignOutAlt } from "@iconscout/react-unicons";

const SignOut = () => {
  return (
    <>
      <div className="signOut">
        <div className="icon">
          <UilSignOutAlt />
        </div>
        <div className="btn">
          <a href="/dashboard">Sign-In</a>
        </div>
      </div>
    </>
  );
};

export default SignOut;
