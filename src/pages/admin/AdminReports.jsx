import React, { useState } from "react";
import AdminLayout from "../../components/common/AdminLayout";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const weeklyData = [
  { name: "Mon", value: 2500, earning: 2500 },
  { name: "Tue", value: 3800, earning: 3800 },
  { name: "Wed", value: 3000, earning: 3000 },
  { name: "Thu", value: 4500, earning: 4500 },
  { name: "Fri", value: 4000, earning: 4000 },
  { name: "Sat", value: 5500, earning: 5500 },
  { name: "Sun", value: 4800, earning: 4800 },
];

const monthlyData = [
  { name: "Week 1", value: 12000, earning: 12000 },
  { name: "Week 2", value: 16000, earning: 16000 },
  { name: "Week 3", value: 14000, earning: 14000 },
  { name: "Week 4", value: 19000, earning: 19000 },
];

const yearlyData = [
  { name: "Jan", value: 42000, earning: 42000 },
  { name: "Feb", value: 39000, earning: 39000 },
  { name: "Mar", value: 46000, earning: 46000 },
  { name: "Apr", value: 52000, earning: 52000 },
  { name: "May", value: 48000, earning: 48000 },
  { name: "Jun", value: 61000, earning: 61000 },
  { name: "Jul", value: 58000, earning: 58000 },
  { name: "Aug", value: 65000, earning: 65000 },
  { name: "Sep", value: 62000, earning: 62000 },
  { name: "Oct", value: 70000, earning: 70000 },
  { name: "Nov", value: 68000, earning: 68000 },
  { name: "Dec", value: 75000, earning: 75000 },
];

const pieDataWeek = [
  { name: "Mon", value: 2500 },
  { name: "Tue", value: 3800 },
  { name: "Wed", value: 3000 },
  { name: "Thu", value: 4500 },
  { name: "Fri", value: 4000 },
  { name: "Sat", value: 5500 },
  { name: "Sun", value: 4800 },
];

const pieDataMonth = [
  { name: "Week 1", value: 12000 },
  { name: "Week 2", value: 16000 },
  { name: "Week 3", value: 14000 },
  { name: "Week 4", value: 19000 },
];

const pieData = [
  { name: "Jan", value: 42000 },
  { name: "Feb", value: 39000 },
  { name: "Mar", value: 46000 },
  { name: "Apr", value: 52000 },
  { name: "May", value: 48000 },
  { name: "Jun", value: 61000 },
  { name: "Jul", value: 58000 },
  { name: "Aug", value: 65000 },
  { name: "Sep", value: 62000 },
  { name: "Oct", value: 70000 },
  { name: "Nov", value: 68000 },
  { name: "Dec", value: 75000 },
];

const COLORS = ["#5BA45E", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#10B981"];

const AdminReports = () => {
  const [filter, setFilter] = useState("week");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chartData =
    filter === "week"
      ? weeklyData
      : filter === "month"
      ? monthlyData
      : yearlyData;

  const pieChartData =
    filter === "week"
      ? pieDataWeek
      : filter === "month"
      ? pieDataMonth
      : pieData;

  const totalEarning = chartData.reduce((sum, item) => sum + item.value, 0);

  return (
    <AdminLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-3">
        <h1 className="text-xl md:text-2xl font-bold text-[#1f2a44]">Reports</h1>

        {/* Filter Buttons */}
        <div className="flex bg-white rounded-xl shadow p-1">
          {["week", "month", "year"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 md:px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition ${
                filter === type
                  ? "bg-[#5BA45E] text-white shadow"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      
      

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Line Chart Card */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
          <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
            Orders Overview ({filter})
          </h2>

          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  stroke="#888" 
                  style={{ fontSize: '10px' }}
                />
                <YAxis 
                  stroke="#888" 
                  style={{ fontSize: '10px' }}
                  tickFormatter={(value) => `₹${(value/1000).toFixed(0)}k`}
                />
                <Tooltip 
                  formatter={(value) => `₹${value.toLocaleString()}`}
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '8px' }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#5BA45E"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#5BA45E' }}
                  activeDot={{ r: 7 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart Card */}
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
          <h2 className="text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4">
            Earnings Distribution ({filter})
          </h2>

          <div className="h-64 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name.substring(0, 3)} ${(percent * 100).toFixed(0)}%`}
                  style={{ fontSize: isMobile ? '11px' : '15px' }}
                  outerRadius={isMobile ? 60 : 90}
                  innerRadius={isMobile ? 30 : 45}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '10px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminReports;
