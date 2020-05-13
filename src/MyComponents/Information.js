import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Information(props) {
  function handleKey(e){
    if(e.target.name === 'citizen'){
      props.seting({...props.value,citizen:e.target.value})
    }else if(e.target.name === 'age'){
      props.seting({...props.value,age:e.target.value})
    }else if(e.target.name === 'Sex'){
      props.seting({...props.value,sex:e.target.value})
    }else if(e.target.name === 'address'){
      props.seting({...props.value,addr:e.target.value})
    }else if(e.target.name === 'city'){
      props.seting({...props.value,city:e.target.value})
    }else if(e.target.name === 'province'){
      props.seting({...props.value,province:e.target.value})   
    }else if(e.target.name === 'country'){
      props.seting({...props.value,country:e.target.value})   
    }else if(e.target.name === 'zip'){
      props.seting({...props.value,zip:e.target.value})   
    }
  }
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: '2px' }} className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="citizen"
                label="Citizen ID or Passport "
                name="citizen"
                onChange ={handleKey}
                value ={props.value.citizen}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                name="age"
                onChange ={handleKey}
                value ={props.value.age}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormControl style={{ margin: '0px', marginLeft: '10px' }} variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="filled-sex-native-simple">Sex</InputLabel>
                <Select
                  native
                  value={props.value.sex}
                  onChange ={handleKey}
                  inputProps={{
                    name: 'Sex',
                    id: 'filled-sex-native-simple',
                  }}
                >
                  <option value={10}>Men</option>
                  <option value={20}>Women</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                onChange ={handleKey}
                value ={props.value.addr}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="city"
                label="City"
                name="city"
                onChange ={handleKey}
                value ={props.value.city}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="province"
                label="Province"
                name="province"
                onChange ={handleKey}
                value ={props.value.province}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                onChange ={handleKey}
                value ={props.value.country}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="zip"
                label="Zip"
                name="zip"
                onChange ={handleKey}
                value ={props.value.zip}
              />
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}