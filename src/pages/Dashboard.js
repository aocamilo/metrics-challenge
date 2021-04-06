import React from 'react';
import { DataCalculationContainer } from '../containers/DataCalculations';
import { useDevopsData } from '../hooks/useDevopsData';

const Dashboard = () => {
  const [devOpsData, loading] = useDevopsData();

  if (loading) return <p>Loading...</p>;
  return <DataCalculationContainer devOpsData={devOpsData} />;
};

export default Dashboard;
