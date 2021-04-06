import { useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';
import getConfig from '../utils/getStrings';

// eslint-disable-next-line import/prefer-default-export
export const useDevopsData = () => {
  const [devopsData, setDevopsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { DEVOPS_DATA_ENDPOINT } = getConfig();

  useEffect(() => {
    setLoading(true);
    fetchData(DEVOPS_DATA_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setDevopsData(data);
        setLoading(false);
      });
  }, []);

  return [devopsData, loading];
};
