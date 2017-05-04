import os from 'os-utils';

export default {
  usage: () => new Promise(os.cpuUsage),
  loadAverage: () => [1, 5, 15].map(os.loadavg)
};
