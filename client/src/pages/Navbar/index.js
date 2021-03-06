import React from 'react';
import {Link} from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button
            component={Link}
            color="inherit"
            to='/'
          >
            Home
          </Button>
          <Button
            component={Link}
            color="inherit"
            to='/users'
          >
            Users
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
