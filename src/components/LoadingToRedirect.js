import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currCount) => --currCount);
    }, 1000);
    // redirect once count is 0
    if (count === 0) {
      toast.error("You're not authorised");
      history.push("/");
    }
    // cleanup
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div style={{ position: "fixed", left: "40%", top: "45%" }}>
      <p>Redirecting you in {count} seconds</p>
    </div>
  );
};

export default LoadingToRedirect;
