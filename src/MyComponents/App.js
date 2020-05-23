import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Copyright from './Copyright'
import AppBar from './AppBar'
import Home from './Home'
import RouteTo from './Route'
import DailyMedicalChecking from './DailyMedicalChecking'
import ActivityLog from './ActivityLog'
import SimpleBottomNavigation from './SimpleBottomNavigation'
export default function App(){
    return(<Router>
        <div className='App'>
        <AppBar/>
        <SimpleBottomNavigation></SimpleBottomNavigation>
        <br></br>
        <Switch>
        <Route path='/' exact component={Home}/>   
        <Route path='/dailymedicalchecking' component={DailyMedicalChecking}/>
        <Route path='/routeto' component={RouteTo}/>
        <Route path='/activitylog' component={ActivityLog}/>
        </Switch>
        <br/><br/>
        <Copyright/>
        </div>
    </Router>)

}