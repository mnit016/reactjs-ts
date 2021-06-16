import './App.css';
import Login from './components/login';
import Home from './components/home';
import { Switch, Route } from 'react-router';
import { getPassword, getUsername } from "./common/local-storage";
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  useEffect(() => {
    if (getPassword() === "sa" && getUsername() === "sa") {
        history.push("/login")
    }
  }, [])
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
