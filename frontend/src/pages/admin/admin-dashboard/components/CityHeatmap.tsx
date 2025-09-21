import React, { useState } from "react";
import { Map, TrendingUp } from "lucide-react";

const CityHeatmap: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const areas = [
    { name: "Sector 1", complaints: 45, intensity: "high", color: "bg-red-500" },
    { name: "Sector 2", complaints: 23, intensity: "medium", color: "bg-orange-500" },
    { name: "Sector 3", complaints: 67, intensity: "high", color: "bg-red-500" },
    { name: "Sector 4", complaints: 12, intensity: "low", color: "bg-green-500" },
    { name: "Sector 5", complaints: 34, intensity: "medium", color: "bg-orange-500" },
    { name: "Sector 6", complaints: 8, intensity: "low", color: "bg-green-500" },
    { name: "Sector 7", complaints: 56, intensity: "high", color: "bg-red-500" },
    { name: "Sector 8", complaints: 29, intensity: "medium", color: "bg-orange-500" },
    { name: "Sector 9", complaints: 15, intensity: "low", color: "bg-green-500" },
  ];

  const hotspots = [
    { area: "MG Road Junction", complaints: 89, category: "Traffic" },
    { area: "City Center", complaints: 76, category: "Parking" },
    { area: "Industrial Area", complaints: 65, category: "Pollution" },
    { area: "Residential Zone A", complaints: 54, category: "Water Supply" },
    { area: "Market District", complaints: 43, category: "Waste Management" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-colors duration-300">
      <div className="flex items-center space-x-2 mb-6">
        <Map className="text-red-600" size={20} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">City Heatmap</h3>
      </div>

      <div className="space-y-6">
        {/* Interactive Map Visualization */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 transition-colors duration-300">
          <div className="text-center text-gray-500 dark:text-gray-300 mb-4">
            <Map size={32} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">Interactive Map View</p>
            <p className="text-xs">Hotspot visualization would appear here</p>
          </div>

          {/* Simulated Map Grid */}
          <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
            {areas.map((area, index) => (
              <div
                key={index}
                className={`relative p-3 rounded cursor-pointer transition-all duration-200 ${area.color} ${
                  area.intensity === "high"
                    ? "opacity-90"
                    : area.intensity === "medium"
                    ? "opacity-60"
                    : "opacity-40"
                } hover:opacity-100 hover:scale-105`}
                onClick={() =>
                  setSelectedArea(selectedArea === area.name ? null : area.name)
                }
                title={`${area.name}: ${area.complaints} complaints`}
              >
                <div className="text-white text-center">
                  <div className="text-xs font-medium">{area.name}</div>
                  <div className="text-lg font-bold">{area.complaints}</div>
                </div>
                {selectedArea === area.name && (
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                    ✓
                  </div>
                )}
              </div>
            ))}
          </div>

          {selectedArea && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-lg text-center transition-colors duration-300">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Selected: <strong>{selectedArea}</strong>
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-300 mt-1">
                {areas.find((a) => a.name === selectedArea)?.complaints} total complaints
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6 text-xs text-gray-700 dark:text-gray-300">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>High (40+ complaints)</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span>Medium (20-39 complaints)</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Low (0-19 complaints)</span>
          </div>
        </div>

        {/* Top Issue Hotspots */}
        <div>
          <h4 className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
            <TrendingUp size={16} />
            <span>Top Issue Hotspots</span>
          </h4>
          <div className="space-y-2">
            {hotspots.map((hotspot, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div>
                  <div className="text-sm font-medium text-gray-800 dark:text-white">
                    {hotspot.area}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {hotspot.category}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-red-600">
                    {hotspot.complaints}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    complaints
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityHeatmap;
