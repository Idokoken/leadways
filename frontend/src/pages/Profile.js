import axios from "axios";
import React, { useEffect } from "react";

function Profile() {
  const getUserProfile = async () => {
    const resp = await axios.get("/user");
    console.log(resp);
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div>
      <h2>This is the profile Page</h2>
    </div>
  );
}

export default Profile;
