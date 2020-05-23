import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RiskIcon from '@material-ui/icons/ReportProblem';
import SurveillanceIcon from '@material-ui/icons/FindInPage';

const useStyles = makeStyles({
  root: {
    width: 500,
    margin: 'auto',
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Risk" icon={<RiskIcon/>} />
      <BottomNavigationAction label="Surveillance" icon={<SurveillanceIcon />} />
    </BottomNavigation>
  );
}
