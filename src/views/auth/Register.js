import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [history, user]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `Email is sent to ${email}, Click the link to complete your registration`
    );

    // Save email to local storage
    window.localStorage.setItem("emailForRegistration", email);

    // Clear email state
    setEmail("");
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your email"
          autoFocus
        />
        <br />

        <button
          type="submit"
          className="btn btn-raised mt-4 btn-primary btn-block"
        >
          Register
        </button>
      </form>
    );
  };

  return (
    <div className="container section_padding">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Register</h2>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
