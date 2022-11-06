import React from "react";
import { Link,Outlet } from "react-router-dom";

function Project() {
  return (
    <div className="container head" >
      <div>
        <p className="h1 text-secondary text-center">My Project</p>
        
        <Link to= "/project/search">Search Projects</Link><br/>
        <Link to = "/project/list">project list</Link>
        <Outlet />
      </div>
    </div>
  );
}

export default Project;
