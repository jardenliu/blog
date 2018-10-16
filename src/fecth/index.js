import axios from 'axios'
import fs from 'fs'
import articleConfigs from '../../articles.json'

const getGithubArticleConfig = async (url) => {
  let result = {
    updatedDate: false,
    rawUrl: ''
  }

  let config = await axios.get(url).then(res => {
    if (res.status == 200) {
      let pageStr = res.data
      let rawUrlStrArr = pageStr.match(/(?<=id=\"raw-url\".*href=\").*(?=\">Raw<\/a>)/g)
      let rawUrl = rawUrlStrArr && rawUrlStrArr.length > 0 ? 'https://github.com' + rawUrlStrArr[0] : false
      let dateTimeStrArr = pageStr.match(/(?<=datetime=\").*(?=\">)/g)
      let updatedDate = dateTimeStrArr && dateTimeStrArr.length > 0 ? dateTimeStrArr[0] : ''
      return {
        rawUrl,
        updatedDate
      }
    }
  })

  return Object.assign({}, result, config)
}

const getGithubArticleContent = async (url) => {
  if (!url || typeof url !== 'string') {
    return ''
  }
  let result = await axios.get(url).then(res => {
    if (res.status == 200) {
      return res.data
    }
    return ''
  })
  return result
}



const fetchGithubArticles = async (articles) => {
  for (let i = 0; i < articles.length; i++) {
    let art = articles[i]
    let cfg = await getGithubArticleConfig(art.url)
    art.content = await getGithubArticleContent(cfg.rawUrl)
    articles[i] = { ...art, ...cfg }
  }

  return articles
}

if (Object.prototype.toString.call(articleConfigs) !== '[object Array]') {
  process.exit(0)
}

const fetchArticles = async (config) => {
  let githubArticles = config.filter(art => art.type === 'github')

  let githubArts = await fetchGithubArticles(githubArticles)

  let articleDatebase = [...githubArts]

  fs.writeFileSync('./database.json', JSON.stringify(articleDatebase))
}

fetchArticles(articleConfigs).catch(err => console.log(err))



