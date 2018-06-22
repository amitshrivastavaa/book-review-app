import { exec } from 'child_process';
import serverPath from 'selenium-server-standalone';
import { path as chromedriverPath } from 'chromedriver';

const args = process.argv.slice(2);

const execute = (cmd, log) => new Promise((resolve, reject) => {
  console.log('start', cmd);
  try {
    const e = exec(cmd, resolve);
    if (log) e.stdout.on('data', (data) => console.log(data.toString()));
  } catch (e) {
    console.error(e);
    reject();
  }
});
execute(`java -jar ${serverPath} -port 4444 -Dwebdriver.chrome.driver=${chromedriverPath}`);
// execute(`java -jar ${serverPath} -Dwebdriver.gecko.driver=/devel/app/shutterstock/sstk-plugin/plugin-backend/backend/node_modules/geckodriver/geckodriver`);

setTimeout(async () => {
  if (args) {
    if (args[0] === '--local') {
      await execute('nightwatch -c nightwatch.localdev.json', true);
    }
  } else {
    await execute('nightwatch', true);
  }
  process.exit();
}, 3000);
