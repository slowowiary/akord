const fs = require('fs')

const files = fs
  .readdirSync('./songs')
  .filter(file => file.endsWith('.json'))

fs.writeFileSync(
  './songs-manifest.json',
  JSON.stringify(files, null, 2)
)

console.log('songs-manifest.json generated')