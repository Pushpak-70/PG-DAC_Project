import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // State to manage registration success message
  const [error, setError] = useState('');
  // const [otp, setOtp] = useState(''); // Define otp state
  const navigation = useNavigate(); // Initialize the useNavigate hook
  

  // const sendOTP = async () => {
  //   try {
  //     // Implement OTP sending logic here
  //     const response = await axios.post('http://localhost:8080/send-otp', { mobileNo });
  //     // For demonstration, let's assume OTP is sent successfully
  //     window.alert('OTP sent successfully!');
  //   } catch (error) {
  //     console.error('Failed to send OTP:', error.message);
  //   }
  // };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/register', {
        firstName,
        lastName,
        email,
        mobileNo,
        password
      });

      console.log(response.data); // Handle success response
      setRegistrationSuccess(true); // Set registration success message to true
      window.alert('Registration successful!');
      navigation('/login'); // Redirect to login page after successful registration
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Handle error response (duplicate email)
      if (error.response && error.response.status === 409) {
        // Email already registered, show error message
        setError('Email already registered. Please use a different email.');
      } else {
        // Other errors, show generic error message
        setError('Registration failed. Please try again later.');
      }
    }
  };


  return (
    <section className="background-radial-gradient overflow-hidden">
      

      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {registrationSuccess && (
        <div className="alert alert-success" role="alert">
          Registration successful!
        </div>
      )}

      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: 'hsl(218, 81%, 95%)' }}>
              The best offer <br />
              <span style={{ color: 'hsl(218, 81%, 75%)' }}>for your business</span>
            </h1>
            <p className="mb-4 opacity-70" style={{ color: 'hsl(218, 81%, 85%)' }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
            <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="form3Example1" className="form-control" placeholder="FirstName" required/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="form3Example2" className="form-control" placeholder="LastName" required/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example1" className="form-control" placeholder="Email address" required/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} type="text" id="form3Example2" className="form-control" placeholder="Mobile No." required/>
                        {/* <button className="btn btn-primary mt-2" onClick={sendOTP}>Send OTP</button> */}
                      </div>
                    </div>
                  </div>
                  {mobileNo && (
                    <div className="form-outline mb-4">
                    {/* <input value={otp} onChange={(e) => setOtp(e.target.value)} type="text" id="form3Example5" className="form-control" placeholder="Enter OTP" required/> */}
                    </div>
                  )}

                  <div className="form-outline mb-4">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" className="form-control" placeholder="Password" required/>
                  </div>

                  <button onClick={handleRegister} type="button" className="btn btn-primary btn-block mb-4" >
                    Sign up
                  </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;