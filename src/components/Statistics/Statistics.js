import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data)
    
  return (
    <div>
      <ResponsiveContainer width="500" height="200">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis></XAxis>
          <YAxis></YAxis>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
