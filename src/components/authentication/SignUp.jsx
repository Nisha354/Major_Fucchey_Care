import React, { useState } from 'react';
import { Form, Input, Button, Select, message, InputNumber } from 'antd';
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  PhoneOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const { Option } = Select;

const Signup = ({ onSwitchToLogin }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = (values) => {
    setLoading(true);
    console.log('Signup values:', values);
    // Add your signup logic here
    setTimeout(() => {
      message.success('Registration successful!');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 via-pink-50 to-orange-100 p-4">
      <div className="flex w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Decorative Panel */}
        <div
          className="hidden md:flex md:w-2/5 flex-col items-center justify-center p-8 relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #94C94A 0%, #BB519A 50%, #FD9B01 100%)',
            borderRadius:  '20px 100px 100px 20px'
          }}
        >
          {/* Decorative circles */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"></div>
          <div className="absolute top-1/2 left-5 w-12 h-12 bg-white/10 rounded-full"></div>

          {/* Logo/Icon */}
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-3xl">🏫</span>
          </div>

          {/* Image of children playing */}
          <div className="w-44 h-44 rounded-2xl overflow-hidden mb-6 shadow-xl border-4 border-white/30">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/271/638/non_2x/babysitter-or-nanny-services-to-care-for-provide-for-baby-needs-and-play-with-children-on-flat-cartoon-hand-drawn-template-illustration-vector.jpg"
              alt="Happy children"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-white text-2xl font-bold text-center mb-2">
            Welcome To
          </h2>
          <h2 className="text-white text-3xl font-bold text-center mb-4">
            DayCare Connect
          </h2>

          <p className="text-white/90 text-center mb-4">
            Already have an account? 
          </p>

          <button
            onClick={()=>{ navigate('/login'); }}
            className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover: transition-all duration-300 shadow-lg"
          >
            LOGIN
          </button>
        </div>

        {/* Right Side - Signup Form */}
        <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
            <p className="text-gray-500">Join DayCare Connect today!</p>
          </div>

          <Form
            name="signup"
            onFinish={onFinish}
            layout="vertical"
            size="large"
            className="max-h-[70vh] overflow-y-auto pr-2"
          >
            {/* Name Fields Row */}
            <div className="grid md: grid-cols-3 gap-3">
              <Form.Item
                name="firstName"
                rules={[{ required: true, message: 'First name required!' }]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="First Name"
                  className="rounded-lg py-2 bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:border-[#94C94A]"
                />
              </Form. Item>

              <Form.Item name="middleName">
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Middle Name"
                  className="rounded-lg py-2 bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:border-[#94C94A]"
                />
              </Form.Item>

              <Form. Item
                name="lastName"
                rules={[{ required: true, message: 'Last name required!' }]}
              >
                <Input
                  prefix={<UserOutlined className="text-gray-400" />}
                  placeholder="Last Name"
                  className="rounded-lg py-2 bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:"
                />
              </Form.Item>
            </div>

            {/* Age and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Form. Item
                name="age"
                rules={[{ required: true, message: 'Please enter your age!' }]}
              >
                <InputNumber
                  min={18}
                  max={100}
                  placeholder="Age"
                  className="w-full rounded-lg bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:"
                  style={{ height: '44px', paddingTop: '6px' }}
                />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: true, message: 'Phone number required!' },
                  { pattern: /^[0-9]{10}$/, message: 'Enter valid 10-digit number!' }
                ]}
              >
                <Input
                  prefix={<PhoneOutlined className="text-gray-400" />}
                  placeholder="Phone Number"
                  className="rounded-lg py-2 bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:border-[#94C94A]"
                />
              </Form. Item>
            </div>

            {/* Email */}
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type:  'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input
                prefix={<MailOutlined className="text-gray-400" />}
                placeholder="Email"
                className="rounded-lg py-2 bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:border-[#94C94A]"
              />
            </Form.Item>

            {/* Password */}
            <Form.Item
              name="password"
              rules={[
                { required:  true, message: 'Please enter your password!' },
                { min: 6, message: 'Password must be at least 6 characters!' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Password"
                className="rounded-lg py-2 bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:border-[#94C94A]"
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Confirm Password"
                className="rounded-lg py-2 bg-gray-50 border-gray-200 hover:border-[#94C94A] focus:border-[#94C94A]"
              />
            </Form.Item>

            {/* Role Selection */}
            <Form. Item
              name="role"
              rules={[{ required: true, message: 'Please select your role!' }]}
            >
              <Select
                placeholder="Select Role"
                className="rounded-lg bg-gray-50"
                suffixIcon={<TeamOutlined className="text-gray-400" />}
              >
                <Option value="parent">
                  <div className="flex items-center gap-2">
                    <span>👨‍👩‍👧</span> Parent
                  </div>
                </Option>
                <Option value="caretaker">
                  <div className="flex items-center gap-2">
                    <span>👩‍⚕️</span> Caretaker
                  </div>
                </Option>
                <Option value="admin">
                  <div className="flex items-center gap-2">
                    <span>👔</span> Admin
                  </div>
                </Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                className="w-full h-12 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #94C94A 0%, #BB519A 100%)',
                  border: 'none'
                }}
              >
                REGISTER
              </Button>
            </Form.Item>
          </Form>

          <div className="mt-2 text-center md:hidden">
            <p className="text-gray-500">Already have an account?</p>
            <button
              onClick={onSwitchToLogin}
              className="text-[#FD9B01] font-semibold hover:text-[#BB519A] transition-colors"
            >
              Login Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;