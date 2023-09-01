import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'A', value: 10 },
  { name: 'B', value: 20 }
];

const Vertical = () => {
  return (
    <div style={{ position: 'relative', width: '400px', height: '300px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
     <svg
        style={{ position: 'absolute', top: '30px', left: '30px', width: '100px', height: '100px', zIndex: 1 }}
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="blue" strokeWidth="2" />
        <polygon points="10,50 10,-20 10,90" fill="blue" />
        <polygon points="100,100 90,60 70,102" fill="blue" />
      </svg>
    </div>
  );
};

export default Vertical;

