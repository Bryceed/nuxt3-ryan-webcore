import { exec } from 'child_process'
import { promisify } from 'util'
const execAsync = promisify(exec)

const installYarn = async () => {
    console.log('Trying to install Yarn...')
    const { stdout, stderr } = await execAsync('npm install -g yarn')
    console.log(stdout)
    console.log(stderr)
    console.log('Yarn installed')
}

const installDependencies = async () => {
    console.log('Installing dependencies...')
    exec('yarn global add nuxt-app --ignore-engines')
    const { stdout, stderr } = await execAsync('yarn install --ingore-engines')
    console.log(stdout)
    console.log(stderr)
    console.log('Dependencies installed')
}

const build = async () => {
    console.log('Building the Nuxt3 application...')
    exec('set NODE_TLS_REJECT_UNAUTHORIZED=0')
    const { stdout, stderr } = await execAsync('yarn build')
    console.log(stdout)
    console.log(stderr)
    console.log('Build completed')
}
    
const start = async () => {
  console.log('Starting services...')
  const { stdout, stderr } = execAsync('yarn server')
  console.log(stdout)
  console.log(stderr)
}

const main = async () => {
    await installYarn()
    await installDependencies()
    await build()
    await start()
}

main()
