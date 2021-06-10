import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
