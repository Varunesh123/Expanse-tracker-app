import React, { useEffect, useState } from 'react'
import { Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner.js';

const Register = () => {
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async(value) => {
    try {
      setLoading(true);
      await axios.post("/users/register", value);
      message.success("Resgistered Successfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    if(localStorage.getItem('user'))
      navigate('/')
  }, [navigate]);

  return (
    <>
      <div className='register-page'>
        {loading && <Spinner />}
        <Form layout='vertical' onFinish={submitHandler}>
          <h1>Register Form</h1>

          <Form.Item label="Name" name="name">
            <Input type='name' />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type='email' />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input type='password' />
          </Form.Item>

          <div className='d-flex justify-content-between'>
            <Link to="/login">Already registered ? Click here to login</Link>
            <button className='btn btn-primary'>Register</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Register
