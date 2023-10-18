const { exec } = require('child_process')
const { promisify } = require('util')
const execAsync = promisify(exec)
const { log } = console

const start = async () => {
    log('Starting...')
    // install nuxt
    await execAsync('npm install nuxt')
    const { stdout, stderr } = await execAsync('node .output/server/index.mjs')
    log(stdout)
    log(stderr)
}

const main = async () => {
    await start()
}

main()