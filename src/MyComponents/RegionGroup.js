import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function RegionGroup(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <Button onClick={props.actions[0]}>North</Button>
        <Button onClick={props.actions[1]}>Central</Button>
        <Button onClick={props.actions[2]}>North East</Button>
        <Button onClick={props.actions[3]}>East</Button>
        <Button onClick={props.actions[4]}>South</Button>
        <Button onClick={props.actions[5]}>west</Button>
      </ButtonGroup>
    </div>
  );
}
