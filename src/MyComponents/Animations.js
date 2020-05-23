import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '95%',
    margin: 'auto',
  },
});

export default function Animations() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
      <Skeleton />
      <Skeleton animation={false} />
      
    </div>
  );
}
