import './App.css';
import Navbar from './components/NavBar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import AboutUs from './components/Pages/AboutUs';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' exact component={AboutUs}/>
          <Route path='/products' exact component={Products}/>
          <Route path='/sign-up' exact component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;