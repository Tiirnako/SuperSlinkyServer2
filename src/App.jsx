
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Header from './components/Header';
import UserHeader from './components/UserHeader';
import Login from './components/Login';
import Register from './components/Register';
import Reset from './components/Reset';
import Dashboard from './components/Dashboard';
import Servers from './components/Servers';
import Sidebar from './components/Sidebar';
import McServers from './components/McServers';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';


function App() {

  const user = useAuthState(auth)

  return (

    <Router>
      <Routes>

        <Route exact path="/" {...user ? <Link to="/Servers" /> : <Link to="/" />} element={
            <>
            <Header />
            <McServers />
            </>
            } />

            <Route  exact path="/Servers" { ...!user ? <Link to='/' /> : <Link to='/Servers' />} element={
            <>
            <UserHeader />
            <McServers />
            </>
            } />
            
            <Route exact path="/Login" element={
              <>
              <Header />
              <Login />
              </>
            } />

            <Route exact path="/register" element={
            <>
            <Header />
            <Register />
            </>
            } />

            <Route exact path="/reset" element={
            <>
            <Header />
            <Reset />
            </>
            } />

            <Route exact { ...!user ? <Link to='/' /> : <Link to='/dashboard' />} path="/dashboard" element={
            <>
            <UserHeader />
            <Dashboard />
            </>
            } />

            <Route exact path="/sidebar" { ...!user ? <Link to='/' /> : <Link to='/sidebar'/> } element={
            <>
            <UserHeader />
            </>
            } />

      </Routes>
    </Router>
    
  )
}

export default App
