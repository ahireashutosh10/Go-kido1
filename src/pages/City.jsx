import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const City = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to homepage as soon as the City page loads
    navigate("/");
  }, [navigate]);

  return (
    <div>
  
    </div>
  );
};

export default City;
