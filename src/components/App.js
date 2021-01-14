import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './driver/authentication/Login'
import Signup from './driver/authentication/Signup'

function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route path='/driver/login' component={Login}/>
        <Route path='/driver/signup' component={Signup}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
