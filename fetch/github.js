import axios from 'axios'
const { base64decode } = require('nodejs-base64');

const GITHUB_API = 'https://api.github.com'

const getArticleUpdatedDate = async (cfg) => {
  let url = `${GITHUB_API}/repos/${cfg.owner}/${cfg.repo}/commits?path=${cfg.path}&sha=${cfg.branch}`

  let updatedDate = await axios.get(url).then(res => {
    if (res.status == 200) {
      let lastCommit = res.data[0]
      return lastCommit.commit.committer.date;
    } else {
      console.log('res', res)
    }
  }, err => {
    console.log('err', err)
  })

  return updatedDate
}

const getArticleContent = async (cfg) => {
  let url = `${GITHUB_API}/repos/${cfg.owner}/${cfg.repo}/contents/${cfg.path}?ref=${cfg.branch}`
  let content = await axios.get(url).then(res => {
    if (res.status == 200) {
      return base64decode(res.data.content)
    }
    return ''
  })
  return content
}

const extractParamsFromUrl = (url) => {
  let owner = getMatchedString(url, /(?<=github\.com\/).*?(?=\/)/)
  let repo = getMatchedString(url, /(?<=github\.com\/.*?\/).*?(?=\/)/)
  let branch = getMatchedString(url, /(?<=blob\/).*?(?=\/)/)
  let path = getMatchedString(url, /(?<=blob\/.*?\/).*/)
  return {
    owner,
    repo,
    branch,
    path
  }
}


const getMatchedString = (str, reg) => {
  let matchedArr = str.match(reg)
  return matchedArr && matchedArr.length > 0 ? matchedArr[0] : ''
}

const fetchGithubArticles = async (articles) => {
  console.log('Fetching github articles...')
  for (let i = 0; i < articles.length; i++) {
    let art = articles[i]
    art.github = extractParamsFromUrl(art.url)
    art.updatedDate = await getArticleUpdatedDate(art.github)
    art.content = await getArticleContent(art.github)
    articles[i] = Object.assign({}, art)
  }

  return articles
}

export default fetchGithubArticles

