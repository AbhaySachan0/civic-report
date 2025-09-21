import React, { useState } from "react";
import { TrendingUp } from "lucide-react";

const MonthlyTrends: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(2025);

  const data = [
    { month: "Jan", complaints: 120, resolved: 95 },
    { month: "Feb", complaints: 150, resolved: 130 },
    { month: "Mar", complaints: 180, resolved: 160 },
    { month: "Apr", complaints: 140, resolved: 125 },
    { month: "May", complaints: 200, resolved: 170 },
    { month: "Jun", complaints: 170, resolved: 155 },
    { month: "Jul", complaints: 190, resolved: 160 },
    { month: "Aug", complaints: 210, resolved: 180 },
    { month: "Sep", complaints: 160, resolved: 140 },
    { month: "Oct", complaints: 0, resolved: 0 },
    { month: "Nov", complaints: 0, resolved: 0 },
    { month: "Dec", complaints: 0, resolved: 0 },
  ];

  const maxValue = Math.max(
    ...data.map((d) => Math.max(d.complaints, d.resolved))
  );

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp className="text-blue-600 dark:text-blue-400" size={20} />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Monthly Complaint Trends
          </h3>
        </div>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className="border rounded px-3 py-1 text-sm bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
        >
          <option value={2025}>2025</option>
          <option value={2024}>2024</option>
        </select>
      </div>

      <div className="space-y-4">
        {/* Legend */}
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-gray-700 dark:text-gray-300">
              Total Complaints
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span className="text-gray-700 dark:text-gray-300">Resolved</span>
          </div>
        </div>

        {/* Chart */}
        <div className="grid grid-cols-12 gap-2 h-64 items-end">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="flex-1 flex flex-col justify-end space-y-1 w-full">
                <div
                  className="bg-orange-500 rounded-t transition-all duration-300"
                  style={{
                    height: `${(item.complaints / maxValue) * 100}%`,
                  }}
                  title={`${item.complaints} complaints`}
                ></div>
                <div
                  className="bg-green-500 rounded-t transition-all duration-300"
                  style={{
                    height: `${(item.resolved / maxValue) * 100}%`,
                  }}
                  title={`${item.resolved} resolved`}
                ></div>
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                {item.month}
              </span>
            </div>
          ))}
        </div>

        {/* Y-axis reference values */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
          <span>0</span>
          <span>{Math.floor(maxValue / 2)}</span>
          <span>{maxValue}</span>
        </div>
      </div>
    </div>
  );
};

export default MonthlyTrends;
