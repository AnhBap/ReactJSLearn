import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tháng 1',
    Sales: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tháng 2',
    Sales: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Tháng 3',
    Sales: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Tháng 4',
    Sales: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Tháng 5',
    Sales: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Tháng 6',
    Sales: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Tháng 7',
    Sales: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Tháng 8',
    Sales: 2134,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Tháng 9',
    Sales: 4123,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Tháng 10',
    Sales: 423,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Tháng 11',
    Sales: 3490,
    pv: 1212,
    amt: 2100,
  },
  {
    name: 'Tháng 12',
    Sales: 5556,
    pv: 555,
    amt: 2100,
  },
];

export default function Chart() {

    return (
        <div style={{ width: '100%', height: 600 }}>
          <ResponsiveContainer>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Sales" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      );
}
