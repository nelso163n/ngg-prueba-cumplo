import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Main from './components/Main';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div nggClassName="App" className={classes.root}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
        <Main />
      </Container>
    </div>
  );
}

export default App;
