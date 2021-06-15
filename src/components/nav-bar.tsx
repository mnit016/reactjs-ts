import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Button } from '@material-ui/core';


export default function QuizzAppBar() {
  return (
    <div>
      <AppBar color="default" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
              <img className="logo-40" alt="logo" src="../logo.png"/>
          </IconButton>
          <h3>Quizz App</h3>
        </Toolbar>
      </AppBar>
    </div>
  );
}