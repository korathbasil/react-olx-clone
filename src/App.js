import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Sell from './Pages/Sell/Sell';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/sell" component={Sell} />
      </div>
    </Router>
  );
}

export default App;
