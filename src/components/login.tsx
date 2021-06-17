import { Card, CardHeader, CardContent, TextField, CardActions, Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import '../App.css';
import { useHistory } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import { saveUser, getPassword, getUsername } from "../common/local-storage";

const Login = () => {
    const history = useHistory();
    useEffect(() => {
        if (getPassword() === "sa" && getUsername() === "sa") {
            history.push("/home")
        }
    }, [])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const login = () => {
        console.log(username + " -- " + password)
        if (username === "sa" && password === "sa") {
            saveUser(username, password)
            history.push("/") 
        } else {
            setErrorMessage("Incorrect Username or Password")
            alertErrorMessage()
        }
    }

    function alertErrorMessage() {
        const alertElement = document.getElementById("alert-error")
        const alertActive = alertElement?.getAttribute("class") + " alert-active"
        alertElement?.setAttribute("class", alertActive)
        setTimeout(() => {
           const alertUnactive = alertActive.replace(" alert-active", "")
           alertElement?.setAttribute("class", alertUnactive)
        }, 2500)
    }


    return (
    <div className="login-box">
        <form autoComplete="off">
            <Card>
            <CardHeader className="padding-bot-0" avatar={<img className="logo-60" src="../logo.png" alt="logo"/>} title={<h1>Quizz App</h1>} />
            <CardContent className="padding-top-0">
                <div>
                <TextField
                    fullWidth
                    id="username"
                    type="email"
                    label="Username"
                    placeholder="Username"
                    margin="normal" required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password" required
                    margin="normal" onChange={(e) => setPassword(e.target.value)}
                />
                </div>
            </CardContent>
            <CardActions>
                <Button
                fullWidth
                onClick={login}
                variant="contained"
                size="medium"
                color="primary">
                Login
                </Button>
            </CardActions>
            </Card>
        </form>
        <Alert id="alert-error" variant="filled" severity="error">
        {errorMessage}
        </Alert>
    </div>
    );
  }
  
  export default Login;