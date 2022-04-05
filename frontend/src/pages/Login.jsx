import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({

    email: "",
    password: "",

  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please, Login to your account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              value={email}
              placeholder="Enter your email..."
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              value={password}
              placeholder="Enter a password..."
              onChange={onChange}
            />
          </div>
          
          <div className="form-group">
            <input type="submit" className="btn btn-black" value="Login" />
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
