import React from 'react';
import Grid from '@material-ui/core/Grid';
import Charts from "../containers/Charts";

const Main = () => {
  return (
    <Grid item xs={12} md={8}>
      <Charts />
    </Grid>
  );
}
export default Main;