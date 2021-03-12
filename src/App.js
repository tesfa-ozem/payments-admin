import Login from './pages/login/login.js'
import Dashboard from './pages/dashboard/dashboard.js'
import Splash from './pages/splash/splash.js'
import Registration from './pages/registration/registration.js'

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './styles/index.scss'
function App() {
  return (
    <Router >
        <Route exact path="/">
            <Splash />
        </Route>
        <Route path="/registration">
            <Registration />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/dashboard">
            <Dashboard />
        </Route>
        
    </Router>
);
}

export default App;
