import React from 'react'

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../MyCss/Home.css'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    title: {
        marginTop: '1%',
        textAlign: 'center',
    },
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        marginTop: theme.spacing(1),
        marginLeft:'auto',
        marginRight:'auto',
      },

}));

export default function DailyMedicalChecking() {
    const classes = useStyles();
    return (<>
        <React.Fragment>
            <Typography variant="h6" className={classes.title} gutterBottom>
                Daily Medical Checking
      </Typography>
            <Container component="main" maxWidth="xs">
                <div style={{ marginTop: '2px' }} className={classes.paper}>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="Temperature"
                                    name="Temperature"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="Temperature"
                                    label="Temperature(C)"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.root}>
                                    <FormControl component="fieldset" className={classes.formControl}>
                                        <FormLabel component="legend">Symptoms</FormLabel>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox name="dryCough" />}
                                                label="dry cough"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="tiredness" />}
                                                label="tiredness"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="achesAndPains" />}
                                                label="aches and pains"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="soreThroat" />}
                                                label="sore throat"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="diarrhoea" />}
                                                label="diarrhoea"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="conjunctivitis" />}
                                                label="conjunctivitis"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="headache" />}
                                                label="headache"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="lossOfTasteOrSmell" />}
                                                label="loss of taste or smell"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="rash" />}
                                                label="a rash on skin, or discolouration of fingers or toes"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="breathing" />}
                                                label="difficulty breathing or shortness of breath"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="chestPain" />}
                                                label="chest pain or pressure"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox name="lossOfSpeech" />}
                                                label="loss of speech or movement"
                                            />

                                        </FormGroup>
                                    </FormControl>

                                </div>
                            </Grid>
                            <Grid item sm={12} style={{display:'flex'}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </React.Fragment>
      
    </>)
}