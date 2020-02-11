import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));


const Filters = ({dateFrom, dateTo, onChangeDateFrom, onChangeDateTo}) => {

  const classes = useStyles();
  return(
    <div>
      <TextField
        id="dateFrom"
        label="Desde"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={dateFrom}
        onChange={onChangeDateFrom}
      />
      <TextField
        id="dateTo"
        label="Hasta"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={dateTo}
        onChange={onChangeDateTo}
      />

    </div>
  )
}

export default Filters;