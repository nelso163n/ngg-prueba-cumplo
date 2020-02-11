import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const InfoChart = ({avg, maxValue, minValue}) => (
  
  <List component="nav" aria-label="main mailbox folders">
    <ListItem>
      <ListItemText primary={`Promedio: ${avg}`} />
    </ListItem>
    <ListItem>
      <ListItemText primary={`Valor maximo: ${maxValue}`} />
    </ListItem>
    <ListItem>
      <ListItemText primary={`Valor minimo: ${minValue}`} />
    </ListItem>
  </List>
);

export default InfoChart;