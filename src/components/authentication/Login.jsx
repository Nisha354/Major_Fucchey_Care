import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const Login = ({ onSwitchToSignup }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    setLoading(true);
    console.log('Login values:', values);
    // Add your login logic here
    setTimeout(() => {
      message.success('Login successful!');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 via-pink-50 to-green-100 p-4">
      <div className="flex w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Log In</h1>
            <p className="text-gray-500">Welcome back to DayCare Connect!</p>
          </div>

          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Email"
                className="rounded-lg py-3 bg-gray-50 border-gray-200 hover:border-[#FD9B01] focus:border-[#FD9B01]"
              />
            </Form.Item>

            <Form. Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Password"
                className="rounded-lg py-3 bg-gray-50"
              />
            </Form.Item>

            <div className="flex justify-end mb-4">
              <a href="#" className="text-[#BB519A] hover:text-[#94C94A] text-sm transition-colors">
                Forgot Password?
              </a>
            </div>

            <Form. Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FD9B01 0%, #BB519A 100%)',
                  border: 'none'
                }}
              >
                LOG IN
              </Button>
            </Form.Item>
          </Form>

          <div className="mt-4 text-center md:hidden">
            <p className="text-gray-500">Don't have an account?</p>
            <button
              onClick={onSwitchToSignup}
              className="text-[#94C94A] font-semibold hover:text-[#FD9B01] transition-colors"
            >
              Register Here
            </button>
          </div>
        </div>

        {/* Right Side - Decorative Panel */}
        <div
          className="hidden md:flex md:w-1/2 flex-col items-center justify-center p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FD9B01 0%, #BB519A 50%, #94C94A 100%)',
            borderRadius: '100px 20px 20px 100px'
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          
          {/* Logo/Icon */}
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-4xl">👶</span>
          </div>

          {/* Image of children playing */}
          <div className="w-48 h-48 rounded-2xl overflow-hidden mb-6 shadow-xl border-4 border-white/30">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/271/638/non_2x/babysitter-or-nanny-services-to-care-for-provide-for-baby-needs-and-play-with-children-on-flat-cartoon-hand-drawn-template-illustration-vector.jpg"
              alt="Children playing"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-white text-3xl font-bold text-center mb-2">
            DayCare Connect
          </h2>
          <p className="text-white/80 text-center mb-6">
            Safe & Happy Childcare
          </p>

          <p className="text-white/90 text-center mb-4">
            New to our platform? 
          </p>

          <button
            onClick={() => { navigate('/signup'); }}
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#BB519A] transition-all duration-300 shadow-lg"
          >
            REGISTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;