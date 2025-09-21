import React, { useState } from "react";
import { PieChart } from "lucide-react";

const CategoryDistribution: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    { name: "Road Infrastructure", count: 245, color: "bg-orange-500", percentage: 35 },
    { name: "Water Supply", count: 180, color: "bg-blue-500", percentage: 26 },
    { name: "Waste Management", count: 140, color: "bg-green-500", percentage: 20 },
    { name: "Street Lighting", count: 95, color: "bg-purple-500", percentage: 13 },
    { name: "Others", count: 40, color: "bg-gray-500", percentage: 6 },
  ];

  const total = categories.reduce((sum, cat) => sum + cat.count, 0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-300">
      <div className="flex items-center space-x-2 mb-6">
        <PieChart className="text-green-600" size={20} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          Category Distribution
        </h3>
      </div>

      <div className="space-y-4">
        <div className="relative">
          {/* Pie Chart using CSS */}
          <div className="w-32 h-32 mx-auto mb-4 relative">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="#f97316" strokeWidth="3" strokeDasharray="35, 100" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="26, 100" strokeDashoffset="-35" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="20, 100" strokeDashoffset="-61" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="13, 100" strokeDashoffset="-81" />
              <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="#6b7280" strokeWidth="3" strokeDasharray="6, 100" strokeDashoffset="-94" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-xl font-bold text-gray-800 dark:text-white">{total}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer ${
                hoveredIndex === index
                  ? "bg-gray-50 dark:bg-gray-700 transform scale-102"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {category.name}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-gray-800 dark:text-white">
                  {category.count}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {category.percentage}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDistribution;
