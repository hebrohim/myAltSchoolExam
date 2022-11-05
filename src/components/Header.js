import React from "react";
import profile_image from "../images/myPassport.jpg";
const Header = () => {
  return (
    
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <img id="profile_img" className="mt-5" src={profile_image} alt="header_image" />
        </div>

        <div className="col">
          <p className="h1 col text-center my-4"><strong>Raheem Ibrahim</strong></p>

    
        </div>
      </div>
    
  );
};

export default Header;
