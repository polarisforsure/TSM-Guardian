/*
 Written with a lot of hate and love by polarisforsure - polarisforsure.com (2022)
*/
const childProcess = require('child_process');

function checkTSM() {
  // Use the "ps" command to check if the TSM_SCHED process is running
  childProcess.exec('ps -ef | grep TSM_SCHED', (err, stdout, stderr) => {
    if (err) {
      // If there is an error, print it to the console
      console.error(err);
      return;
    }

    // If TSM_SCHED is not running, we need to restart it
    if (stdout.indexOf('TSM_SCHED') === -1) {
      console.log('TSM_SCHED is not running. Restarting...');

      // Use the "tsm" command to restart TSM_SCHED
      childProcess.exec('tsm restart', (err, stdout, stderr) => {
        if (err) {
          // If there is an error, print it to the console
          console.error(err);
          return;
        }

        console.log('TSM_SCHED restarted successfully');
      });
    } else {
      console.log('TSM_SCHED is running');
    }
  });
}

// Check TSM every 5 seconds
setInterval(checkTSM, 5000);

// If the script crashes, restart it
process.on('uncaughtException', (err) => {
  console.error(err);
  process.exit(1);
});
