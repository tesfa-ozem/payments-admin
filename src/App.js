import Login from './pages/login/login.js'
import Dashboard from './pages/dashboard/dashboard.js'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './styles/index.scss'
function App() {
  return (
    <Router >
        <Route exact path="/">
            <Login />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
        
    </Router>
);
}

export default App;
