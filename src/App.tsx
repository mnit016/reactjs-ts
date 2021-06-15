import './App.css';
import Login from './components/login';
import Home from './components/home';
import { Switch, Route } from 'react-router';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      
      <Route exact path="/">
        <Home/>
      </Route>
    </Switch>
  );
}

export default App;
