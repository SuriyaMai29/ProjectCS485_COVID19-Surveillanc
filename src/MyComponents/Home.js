import React from 'react'
import AppBar from './AppBar'
import '../MyCss/Home.css'
import DashBoard from './DashBoard'

import Chart from './DH/Chart';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
export default function Home() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      
      <DashBoard></DashBoard>
      <br></br>
      <Paper className={fixedHeightPaper} style={{marginLeft:'1.5%',marginRight: '1.5%'}}>
        <Chart />
      </Paper>
    </>
  )
}