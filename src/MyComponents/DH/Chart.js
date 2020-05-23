import React, { useState,useEffect } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import CovidInfo from '../../Utils/CovidInFoByDate'

export default function Chart() {
  const theme = useTheme();
  const [Dates, setDate] =useState([{}])
  useEffect(() => {
     CovidInfo(Dates,setDate) 
},[])
  return (
     <React.Fragment >
      <Title>May 2020</Title>
      <ResponsiveContainer>
        <LineChart
          data={Dates}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="Date" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Pepole
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="NewConfirmed" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}