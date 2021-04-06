import React, { useEffect, useState } from 'react';
import { DisplayInfoComponent } from '../components/displayInfo';
import {
  getChangeFailPercentage,
  getDeploymentFrequency,
  getLeadTimeForChangesInMinutes,
} from '../utils/calculations';

export const DataCalculationContainer = ({ devOpsData = [] }) => {
  const [metrics, setMetrics] = useState([]);
  useEffect(() => {
    if (devOpsData) {
      setMetrics([
        ...metrics,
        {
          name: 'Failed Deploy Percentage',
          value: `${getChangeFailPercentage(devOpsData)}%`,
        },
        {
          name: 'Lead Time for Changes',
          value: `${getLeadTimeForChangesInMinutes(devOpsData)}`,
        },
        {
          name: 'Time to restore service',
          value: null,
        },
        {
          name: 'Deployment frequency',
          value: getDeploymentFrequency(devOpsData),
        },
      ]);
    }
  }, []);

  return (
    <>
      <h2> Deployment Metrics </h2>
      {metrics && metrics.map((metric) => <DisplayInfoComponent {...metric} />)}
    </>
  );
};

export default DataCalculationContainer;
