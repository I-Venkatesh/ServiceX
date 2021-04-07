import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Dashboard from './components/pages/Dashboard';
import SignUp from './components/pages/SignUp';
import Map from './components/pages/Map';
import MechanicBooking from './components/pages/MechanicBooking';
import axios from "axios"
import SignIn from './components/pages/SignIn';
import { AuthContextProvider } from './context/AuthContext';

axios.defaults.withCredentials = true 

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <Navbar/>
      <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/services' exact component={Services}/>
       <Route path='/dashboard' exact component={Dashboard}/>
       <Route path='/sign-up' exact component={SignUp}/>
       <Route path='/sign-in' exact component={SignIn}/>
       <Route path='/map' exact component={Map}/>
       <Route path='/mechanic' exact component={MechanicBooking}/>
      </Switch>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
