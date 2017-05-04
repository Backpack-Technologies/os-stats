import os from 'os';

export default {
  total: () => Math.round(os.totalmem() / (1024 * 1024)),
  free: () => Math.round(os.freemem() / (1024 * 1024)),
  used: () => total() - free()
};
