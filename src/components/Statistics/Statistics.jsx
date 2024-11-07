import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData()["All Products"];
  console.log(data);

  return (
    <>
      <h1 className="text-center text-3xl max-sm:text-xl mt-5 mb-8 bg-[#9538e2] text-white font-bold py-20 max-sm:py-9">
        Chart of Products Prices
      </h1>
      <ResponsiveContainer className={"mx-auto"} width="95%" height={400}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 0,
            bottom: 20,
            left: 0,
          }}
        >
          <XAxis dataKey="product_title" className="text-xs" />
          <YAxis dataKey="price" className="text-sm"/>
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="price"
            fill="#8884d8"
            stroke="#8884d8"
          />
          <Bar dataKey="price" barSize={15} fill="#9538e2" />
          <Scatter dataKey="rating" fill="red" />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default Statistics;
