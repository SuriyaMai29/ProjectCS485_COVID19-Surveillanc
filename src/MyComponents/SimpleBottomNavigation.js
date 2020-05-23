import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from "react-router-dom";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CommuteIcon from '@material-ui/icons/Commute';
import HistoryIcon from '@material-ui/icons/History';

const useStyles = makeStyles({
  root: {
    width: '98%',
    margin:'auto'
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const routeDaily = () =>{ 
    let path = `/dailymedicalchecking`; 
    history.push(path);
  }
  const routeRouteTo=()=>{ 
    let path = `/routeto`; 
    history.push(path);
  }
  const routeActivityLog=()=>{ 
    let path = `/activitylog`; 
    history.push(path);
  }
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
      style={{marginTop:'1%'}}
    >
      <BottomNavigationAction label="Daily Medical Checking" icon={<NoteAddIcon />}  onClick={routeDaily}/>
      <BottomNavigationAction label="Route to" icon={<CommuteIcon />} onClick={routeRouteTo} />
      <BottomNavigationAction label="Activity Log" icon={<HistoryIcon /> }  onClick={routeActivityLog}/>
    </BottomNavigation>
  );
}