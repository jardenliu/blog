import axios from 'axios'

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
      let dateTimeStrArr = pageStr.match(/(?<=datetime\=\").*(?=\">)/g)
      let updatedDate = dateTimeStrArr && dateTimeStrArr.length > 0 ? dateTimeStrArr[0] : ''

      if (dateTimeStrArr == null) {
        return getGithubArticleConfig(url)
      }

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


export default fetchGithubArticles

