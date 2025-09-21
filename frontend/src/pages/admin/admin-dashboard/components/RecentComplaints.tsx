import React, { useState } from 'react';
import { FileText, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const RecentComplaints: React.FC = () => {
  const [selectedComplaint, setSelectedComplaint] = useState<number | null>(null);
  
  const complaints = [
    {
      id: 'CMP001',
      citizen: 'Rajesh Kumar',
      category: 'Road Infrastructure',
      location: 'MG Road, Sector 14',
      status: 'Resolved',
      priority: 'High',
      date: '2025-01-15',
      description: 'Pothole causing traffic issues'
    },
    {
      id: 'CMP002',
      citizen: 'Priya Sharma',
      category: 'Water Supply',
      location: 'Green Park Colony',
      status: 'In Progress',
      priority: 'Medium',
      date: '2025-01-14',
      description: 'Water supply disruption for 3 days'
    },
    {
      id: 'CMP003',
      citizen: 'Mohammad Ali',
      category: 'Street Lighting',
      location: 'Park Street, Block A',
      status: 'Pending',
      priority: 'Low',
      date: '2025-01-13',
      description: 'Street lights not working'
    },
    {
      id: 'CMP004',
      citizen: 'Anita Patel',
      category: 'Waste Management',
      location: 'Residency Road',
      status: 'Resolved',
      priority: 'High',
      date: '2025-01-12',
      description: 'Garbage not collected for a week'
    },
    {
      id: 'CMP005',
      citizen: 'Vikram Singh',
      category: 'Road Infrastructure',
      location: 'Civil Lines',
      status: 'In Progress',
      priority: 'Medium',
      date: '2025-01-11',
      description: 'Traffic signal malfunction'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400';
      case 'In Progress': return 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Pending': return 'text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50 dark:bg-red-900/30 dark:text-red-400';
      case 'Medium': return 'text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400';
      case 'Low': return 'text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400';
      default: return 'text-gray-600 bg-gray-50 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Resolved': return <CheckCircle size={16} className="text-green-600 dark:text-green-400" />;
      case 'In Progress': return <Clock size={16} className="text-orange-600 dark:text-orange-400" />;
      case 'Pending': return <AlertCircle size={16} className="text-red-600 dark:text-red-400" />;
      default: return <Clock size={16} className="text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6 transition-colors duration-300">
      <div className="flex items-center space-x-2 mb-6">
        <FileText className="text-purple-600 dark:text-purple-400" size={20} />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Recent Complaints</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Complaint ID
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Citizen Name
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Category
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Location
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Priority
              </th>
              <th className="text-left py-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
            {complaints.map((complaint, index) => (
              <tr
                key={complaint.id}
                className={`hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors ${
                  selectedComplaint === index ? 'bg-blue-50 dark:bg-blue-900/30' : ''
                }`}
                onClick={() => setSelectedComplaint(selectedComplaint === index ? null : index)}
              >
                <td className="py-3 px-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{complaint.id}</span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-sm text-gray-900 dark:text-gray-100">{complaint.citizen}</span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">{complaint.category}</span>
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} className="text-gray-400 dark:text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{complaint.location}</span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(complaint.status)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(complaint.status)}`}>
                      {complaint.status}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(complaint.priority)}`}>
                    {complaint.priority}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{complaint.date}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {selectedComplaint !== null && (
        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Complaint Details</h4>
          <p className="text-sm text-blue-700 dark:text-blue-400">{complaints[selectedComplaint].description}</p>
        </div>
      )}
    </div>
  );
};

export default RecentComplaints;
