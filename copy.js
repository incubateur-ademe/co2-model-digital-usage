import { copyFileSync } from 'fs'

const srcPath = 'publicodes-negaoctet.model.json'
const destPath = `./doc/src/${srcPath}`

copyFileSync(srcPath, destPath)
console.log(`✅ ${destPath} correctly written in "doc/src"`)
