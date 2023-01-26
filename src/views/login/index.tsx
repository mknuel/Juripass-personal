import React, { useState } from 'react'
import LoginPage from './LoginPage'

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return <LoginPage />
};

export default Login