require("babel-register")()
import path from 'path'
import schedule from 'node-schedule'
import fetch from './fetch'

let articleConfigs = require(path.join(__dirname, '..', 'articles.json'))

if (Object.prototype.toString.call(articleConfigs) !== '[object Array]') {
  console.log('articles.json is not found');
  process.exit(0)
}

function scheduleUpdateData() {
  let distSrc = path.join(__dirname, '..', 'www')
  schedule.scheduleJob('0 */10 * * * *', function () {
    console.log(new Date(), ':', 'Updated data.json')
    fetch(articleConfigs, distSrc).catch(err => console.log(err))
  });
}
scheduleUpdateData();
