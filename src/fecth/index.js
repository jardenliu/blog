import fs from 'fs'
import path from 'path'
import fetchGithubArticles from './github'

let articleConfigs = require(path.join(__dirname, '..', 'articles.json'))

if (Object.prototype.toString.call(articleConfigs) !== '[object Array]') {
  process.exit(0)
}

const fetchArticles = async (config) => {
  let githubArticles = config.filter(art => art.type === 'github')

  let githubArts = await fetchGithubArticles(githubArticles)

  let articleDatebase = [...githubArts];

  fs.writeFileSync(path.join(__dirname, '..', 'database.json'), JSON.stringify(articleDatebase));
}

fetchArticles(articleConfigs).catch(err => console.log(err))



