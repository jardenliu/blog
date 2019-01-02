import path from 'path'
import fetchGithubArticles from './github'
import { writeFileSync } from './units/fs'

let default_output_src = path.join(__dirname, '..', '..', 'static/.database')

const fetchArticles = async (config, output) => {
  let githubArticles = config.filter(art => art.type === 'github')

  let githubArts = await fetchGithubArticles(githubArticles)

  let articleDatebase = [...githubArts]

  let outputSrc = output || default_output_src

  writeFileSync(
    path.join(outputSrc, 'data.json'),
    JSON.stringify(articleDatebase)
  )
}

export default fetchArticles
