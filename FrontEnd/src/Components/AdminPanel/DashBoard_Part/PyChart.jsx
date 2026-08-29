import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PyChart = () => {
  const data = [
    { name: "Diamond", value: 28 },
    { name: "Golden", value: 48 },
    { name: "Silver", value: 24 },
  ];

  const COLORS = ["#fa1a4f", "#f2a90b", "#0088FE"];

  return (
    <div className="pychart_main_frame p-2">
      <p className="pychart_title">Today's seat Occupancy</p>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <div className="pychart_container">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={60}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6">
          <div className="pychart_details">
            {data.map((item, index) => (
              <div className="seat_detail" key={item.name}>
                <span
                  className="seat_color"
                  style={{ backgroundColor: COLORS[index] }}
                ></span>

                <span className="pychart_name">{item.name}</span>

                <strong>{item.value}%</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyChart;
