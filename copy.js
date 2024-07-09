import { copyFileSync } from 'fs'

const srcPath = 'publicodes-acv-numerique.model.json'
const destPath = `./doc/src/${srcPath}`

copyFileSync(srcPath, destPath)
console.log(`✅ ${destPath} correctly written in "doc/src"`)
