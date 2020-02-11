import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.action.selected,
    marginBottom: 50
  },
  toolbarTitle: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  const title = 'Prueba Frontend';
  
  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
      </Toolbar>
    </>
  );
}

export default Header;