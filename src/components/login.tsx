import { Card, CardHeader, CardContent, TextField, CardActions, Button } from "@material-ui/core";
import '../App.css';

const Login = () => {

    return (
    <div className="login-box">
        <form noValidate autoComplete="off">
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
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    margin="normal"
                />
                </div>
            </CardContent>
            <CardActions>
                <Button
                fullWidth
                variant="contained"
                size="medium"
                color="primary">
                Login
                </Button>
            </CardActions>
            </Card>
        </form>
    </div>
    );
  }
  
  export default Login;