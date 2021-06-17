import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { NavLink, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { clear } from '../common/local-storage';
import { useEffect, useState } from 'react';
import { getPassword, getUsername } from "../common/local-storage";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    appbarRight: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
  }));

export default function QuizzAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const defaultBtn = <NavLink className="link-nondecoration" to="/login"><Button variant="contained" size="small" color="primary">Login</Button></NavLink>
  const [button, setButton] = useState(() => defaultBtn)
  const logout = () => {
    clear()
    history.push("/")
    setButton(defaultBtn)
  }
  useEffect(() => {
    if (getPassword() === "sa" && getUsername() === "sa") {
      setButton(() => <NavLink className="link-nondecoration" to="/"><Button variant="contained" onClick={logout} size="small" color="primary">Logout</Button></NavLink>)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Toolbar>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
            >
                <img className="logo-40" alt="logo" src="../logo.png"/>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>Quizz App</Typography>
            <div className={classes.appbarRight}>
                <NavLink exact={true} activeClassName="nav-link-active" className="nav-link" to="/">Home</NavLink>
                <NavLink activeClassName="nav-link-active" className="nav-link" to="/quizz">Quizz Challenge</NavLink>
                <NavLink activeClassName="nav-link-active" className="nav-link" to="/result">View Result</NavLink>
                {button}                
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}