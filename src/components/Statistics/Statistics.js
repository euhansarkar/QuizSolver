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
  console.log(data);

  return (
    <div className="mt-[50px]">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width={800} height={500} data={data}>
          <Bar dataKey="total" fill="#8884d8" />
          <XAxis></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
