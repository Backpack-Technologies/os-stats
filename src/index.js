import memory from './memory.js';
import cpu from './cpu.js';

export {
  memory, cpu
};


(async () => {
  console.log("====== Memory ======");

  console.log("Total Memory: " + totalMemMB() + " MB");
  console.log("Free Memory: " + freeMemMB() + " MB");
  console.log("Used Memory: " + usedMemMB() + " MB");

  console.log("====================");

  console.log("====== CPU =========");

  console.log("CPU Usage(%): " + (await usage()).toFixed(5));
  console.log("Load Average(1, 5, 15 mins): " +
    loadAvrgOne().toFixed(2),
     loadAvrgFive().toFixed(2),
      loadAvrgFifteen().toFixed(2));

  console.log("====================");

})();
