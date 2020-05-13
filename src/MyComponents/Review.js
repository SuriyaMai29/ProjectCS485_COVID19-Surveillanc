import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';




export default function Review(props) {
  

  return (<>

    <table>
      <tr> 
        <th style={{border: '1px solid black'}}>Name</th>
        <td style={{border: '1px solid black'}}>{props.value.fname} {props.value.lname}</td>
      </tr> 
      <tr>
        <th style={{border: '1px solid black'}}>Email</th>
        <td style={{border: '1px solid black'}}>{props.value.email}</td>
      </tr>
      <tr >
        <th style={{border: '1px solid black'}}>Phone Number</th>
        <td style={{border: '1px solid black'}}>{props.value.phoneNo}</td>
      </tr>
      <tr>
        <th style={{border: '1px solid black'}} >Password</th>
        <td style={{border: '1px solid black'}}>{props.value.PWD}</td>
      </tr>
      <tr>
        <th style={{border: '1px solid black'}}>Citizen ID or Passport</th>
        <td style={{border: '1px solid black'}}>{props.value.citizen}</td>
      </tr>
      <tr>
        <th style={{border: '1px solid black'}}>Age/Sex</th>
        <td style={{border: '1px solid black'}}>{props.value.age}/{props.value.sex}</td>
      </tr>
      <tr>
        <th style={{border: '1px solid black'}}>Address</th>
        <td style={{border: '1px solid black'}}>{props.value.addr}/{props.value.city}/{props.value.province}/
        {props.value.country}/{props.value.zip}</td>
      </tr>
    </table>
  </>);
}