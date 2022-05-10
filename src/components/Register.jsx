import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://94.74.86.174:8080/api/register', {
        email,
        password,
        username,
      });
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div>
      <section className="hero has-background-grey-light is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-4-desktop">
                <form className="box" onSubmit={Register}>
                  <div className="field mt-5">
                    <label className="label">Username</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Email</label>
                    <div className="controls">
                      <input
                        type="text"
                        className="input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <label className="label">Password</label>
                    <div className="controls">
                      <input
                        type="password"
                        className="input"
                        placeholder="*****"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="field mt-5">
                    <button className="button is-link is-fullwidth">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
