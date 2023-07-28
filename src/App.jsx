
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


function App() {

  return (
    <Router>
      <Routes>

        <Route exact path="/" element={
            <>
            <Header />
            <Servers />
            </>
            } />

            <Route exact path="/Servers" element={
            <>
            <UserHeader />
            <Servers />
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

            <Route exact path="/dashboard" element={
            <>
            <UserHeader />
            <Dashboard />
            </>
            } />

            <Route exact path="/sidebar" element={
            <>
            <UserHeader />
            </>
            } />

      </Routes>
    </Router>
  )
}

export default App
