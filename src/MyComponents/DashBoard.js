import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CovidInfo from '../Utils/CovidInfromations'

import ButtonBase from '@material-ui/core/ButtonBase';
import ConfirmedIcon from '../img/coronavirus.png';
import RecoveredIcon from '../img/people (1).png';
import HospitalizedIcon from "../img/transfusion.png";
import DeathIcon from '../img/medical.png';
import Animations from './Animations';
import CovidInfromations from '../Utils/CovidInfromations'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: '95%',
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function DashBoard() {
    const classes = useStyles();
    const [covidInfo, setCovidInfo] = useState({
        Confirmed: '', Recovered: '', Hospitalized: '', Deaths: '',
        UpdateDate: ''
    });
    useEffect(() => {
        fetch(CovidInfromations())
        .then(res=>res.json())
        .then(res=>{
            setCovidInfo({Confirmed:res.Confirmed,
            Recovered:res.Recovered,
            Hospitalized:res.Hospitalized,
            Deaths:res.Deaths,
            UpdateDate:res.UpdateDate})
        })
        console.log(CovidInfromations())
    },[])

    return (<>
        {( covidInfo.Confirmed > 0) ? <div className={classes.root}>
            <Paper className={classes.paper} >
                <Grid container spacing={2} style={{ textAlign: 'center' }}>
                <Grid item  xs={12}  >
                      <h2>covid 19 statistics</h2>
                    </Grid>
                    <Grid item  xs={12} sm={3} >
                        <ButtonBase className={classes.image} disabled>
                            <img className={classes.img} alt="complex" src={ConfirmedIcon} />
                        </ButtonBase>
                        <h3> Confirmed</h3>
                        <h4>{covidInfo.Confirmed}</h4>
                    </Grid>
                    <Grid item  xs={12} sm={3}>
                        <ButtonBase className={classes.image} disabled>
                            <img className={classes.img} alt="complex" src={RecoveredIcon} />
                        </ButtonBase>
                        <h3> Recovered</h3>
                        <h4>{covidInfo.Recovered}</h4>
                    </Grid>
                    <Grid item  xs={12} sm={3}>
                        <ButtonBase className={classes.image} disabled>
                            <img className={classes.img} alt="complex" src={HospitalizedIcon} />
                        </ButtonBase>
                        <h3> Hospitalized</h3>
                        <h4>{covidInfo.Hospitalized}</h4>
                    </Grid>
                    <Grid item  xs={12} sm={3}>
                        <ButtonBase className={classes.image} disabled>
                            <img className={classes.img} alt="complex" src={DeathIcon} />
                        </ButtonBase>
                        <h3> Deaths</h3>
                        <h4>{covidInfo.Deaths}</h4>
                    </Grid>
                </Grid>
            </Paper>
        </div> : <Animations />}
    </>
    );
}
