import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Dashboard from './components/pages/Dashboard';
import SignUp from './components/pages/SignUp';
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/services' exact component={Services}/>
       <Route path='/dashboard' exact component={Dashboard}/>
       <Route path='/sign-up' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
