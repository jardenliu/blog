require("babel-register")()
import path from 'path'
import fetch from './fetch'

let articleConfigs = require(path.join(__dirname, '..', 'articles.json'))

if (Object.prototype.toString.call(articleConfigs) !== '[object Array]') {
  console.log('articles.json is not found');
  process.exit(0)
}

fetch(articleConfigs).catch(err => console.log(err))



