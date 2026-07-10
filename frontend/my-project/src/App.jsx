import React from 'react'
import Navbar from "./components/navbar"
import { Route, Routes } from 'react-router-dom'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import Profile from './pages/profile'
import CreatePost from './pages/createPost'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </>
  );
}


export default App;