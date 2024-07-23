import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { year: 2002, ohioStudents: 5053, nonOhioStudents: 5982 - 5053 },
  { year: 2012, ohioStudents: 5478, nonOhioStudents: 7215 - 5478 },
  { year: 2022, ohioStudents: 5337, nonOhioStudents: 8060 - 5337 },
];

const OhioStateDualLine = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line 
        type="monotone" 
        dataKey="ohioStudents" 
        stroke="#8884d8" 
        name="Ohio Students" 
        strokeWidth={3}
      />
      <Line 
        type="monotone" 
        dataKey="nonOhioStudents" 
        stroke="#82ca9d" 
        name="Non-Ohio Students" 
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default OhioStateDualLine;