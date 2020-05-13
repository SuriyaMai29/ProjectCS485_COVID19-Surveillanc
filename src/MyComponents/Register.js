
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



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
}));

export default function Register(props) {
  const classes = useStyles();
  function handleKey(e){
    if(e.target.name === 'firstName'){
      props.seting({...props.value,fname:e.target.value})
    }else if(e.target.name === 'lastName'){
      props.seting({...props.value,lname:e.target.value})
    }else if(e.target.name === 'email'){
      props.seting({...props.value,email:e.target.value})
    }else if(e.target.name === 'password'){
      props.seting({...props.value,PWD:e.target.value})
    }else if(e.target.name === 'phone'){
      props.seting({...props.value,phoneNo:e.target.value})
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      
      <div  style={{marginTop:'2px'}}className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={props.value.fname}
                onChange={handleKey}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={props.value.lname}
                onChange={handleKey}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={props.value.email}
                onChange={handleKey}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                onChange={handleKey}
                value ={props.value.phoneNo}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={props.value.PWD}
                onChange={handleKey}
              />
            </Grid>
           
          </Grid>
        </form>
      </div>
    </Container>
  );
}