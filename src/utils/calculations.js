function secondsToHours(ms) {
  const time = Number(ms);
  const seconds = ((time % 60000) / 1000).toFixed(0);
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor((seconds % 3600) % 60);

  const hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : '';
  const mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : '';
  const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : '';
  return hDisplay + mDisplay + sDisplay;
}

// eslint-disable-next-line import/prefer-default-export
export const getChangeFailPercentage = (data) => {
  const failedDeploys = data.filter((deploy) => deploy.result === 'FAILURE');
  return ((failedDeploys.length / data.length) * 100).toFixed(2);
};

export const getLeadTimeForChangesInMinutes = (data) => {
  let totalTime = 0;
  data.forEach((deploy) => {
    totalTime += deploy.duration;
  });
  return secondsToHours(totalTime / data.length);
};

export const getTimeToRestoreService = (data) => null;

export const getDeploymentFrequency = (data) => {
  const monthCount = {};
  const months = data.map((deploy) => new Date(deploy.timestamp).getMonth());
  months.forEach((month) => {
    if (monthCount[month]) {
      monthCount[month] += 1;
      return;
    }
    monthCount[month] = 1;
  });
  // conver to tuple, get first tuple
  const avgMonth = Object.entries(monthCount);
  const sortedArray = avgMonth.sort((a, b) => a[1] - b[1]);
  const [firstArrItem] = sortedArray;
  if (firstArrItem) return `${Math.floor(firstArrItem[1] / 30)} deploys/day`;
  return null;
};
