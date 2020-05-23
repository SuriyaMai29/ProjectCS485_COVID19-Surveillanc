import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

export default function ActivityLog() {
  const datas=[{date:'01/04/2020',temp:'36.35',symptoms:['dry cough','sore throat','tiredness'],roteTo:['กรุงเทพฯ','ชัยภูมิ']},
  {date:'02/04/2020',temp:'38.35',symptoms:['chest pain or pressure','headache','tiredness'],roteTo:['ชัยภูมิ']},
  {date:'03/04/2020',temp:'36.35',roteTo:['นครราชสีมา','ชัยภูมิ']}, //no symptoms
  {date:'04/04/2020',temp:'36.35',symptoms:['dry cough']},// no rote to
  {date:'05/04/2020',temp:'36.35'}] 
  var index =0
  const [expanded, setExpanded] = React.useState(`panel1`);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container sm='lg'>
        {datas.map(ele=>{
            index=index+1
            return(<ExpansionPanel square expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <ExpansionPanelSummary aria-controls= {`panel${index}d-content`} id={`panel${index}d-header`}>
              <Typography>Date {ele.date}</Typography>
              
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              Temperature: {ele.temp} C<br/>
             Symptoms: {(typeof ele.symptoms ==='undefined')?' -': ele.symptoms.map(e=>`${e}, `)}<br/>
             Rote to :{(typeof ele.roteTo ==='undefined')?' -': ele.roteTo.map(el=>`${el}, `)}<br/>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>)
        })}
        
     


      
      
    </Container >
  );
}
