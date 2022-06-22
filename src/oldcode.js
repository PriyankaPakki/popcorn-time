import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate, Link} from "react-router-dom"
import Signup from './components/Signup';
import { Button, Checkbox, Form, Input } from 'antd';

function App() {

  // const [credentials, setCredentials] = useState({
  //   username: '',
  //   password: '',
  // })
 
  // const [user, setUser] = useState()

  // function handleChange(event){
  //   event.persist();
  //   setCredentials({
  //     ...credentials,
  //     [event.target.name]: event.target.value
  //   })
  // }

  // const handleLogin = async e => {

  // }
  
  // const navigate = useNavigate();
  // const handleSignup = () => {
  //   navigate("/signup")
  // }


  // if (user) {
  //   return <div>{credentials.username} is loggged in</div>;
  // }

  return (
    
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    
    // </Router>
  );
}

export default App;
