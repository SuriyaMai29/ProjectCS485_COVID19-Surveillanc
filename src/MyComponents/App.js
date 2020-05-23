import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Copyright from './Copyright'
import AppBar from './AppBar'
import Home from './Home'
import RouteTo from './Route'
import DailyMedicalChecking from './DailyMedicalChecking';
export default function App(){
    return(<Router>
        <div className='App'>
        <AppBar/>
        <Switch>
         <Route path='/' exact component={Home}/>   
         <Route path='/dailymedicalchecking' component={DailyMedicalChecking}/>
        <Route path='/routeto' component={RouteTo}/>
        </Switch>
        <br/><br/>
        <Copyright/>
        </div>
    </Router>)

}