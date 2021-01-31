const esbuild = require('esbuild')
const path = require('path')
const fs = require('fs')

const publicPath = path.resolve(__dirname, '../public/')
const distPath = path.resolve(__dirname, '../dist/')
const isWatchEnabled = process.env.ESBUILD_WATCH === 'true'
const clientIdentifier = process.env.CLIENT_IDENTIFIER

if (!clientIdentifier) {
    throw new Error('CLIENT_IDENTIFIER is not set. Please issue \'export CLIENT_IDENTIFIER=<string>\' or \'set CLIENT_IDENTIFIER=<string>\'.')
}

const buildOptions = {
  entryPoints: ['src/index.tsx'],
  bundle: true,
  watch: isWatchEnabled,
  define: { 'process.env.NODE_ENV': '"production"', 'process.env.CLIENT_IDENTIFIER': `\"${clientIdentifier}\"`},
  outfile: 'dist/bundle.js',
}

if (isWatchEnabled) {
  console.log('Watching build files...')
}

const copyPublicFile = () => {
  if (!fs.existsSync(distPath)) {
    fs.mkdirSync(distPath)
  }
  fs.copyFileSync(publicPath + '/index.html', distPath + '/index.html')
}

copyPublicFile()

const buildResult = esbuild.buildSync(buildOptions)

if (isWatchEnabled) {
  buildResult.stop()
}
