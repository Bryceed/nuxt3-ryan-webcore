import { exec } from 'child_process'
import { promisify } from 'util'
const execAsync = promisify(exec)

const build = async () => {
    console.log('Building...')
    const { stdout, stderr } = await execAsync('npm run build')
    console.log(stdout)
    console.log(stderr)
    console.log('Build completed')
}
    
const start = async () => {
    console.log('Starting...')
    exec('npm run server', (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });

    console.log('Started')
}

const main = async () => {
    await build()
    await start()
}

main()
