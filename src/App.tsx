import './App.css';
import Login from './components/login';
import Home from './components/home';
import { Switch, Route } from 'react-router';

const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
