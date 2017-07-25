import { exec } from 'mz/child_process'

export default program =>
  program
    .command('init <training-name>')
    .description('Go to the beginning of exercise')
    .action(async (trainingName, options) => {
      console.log('Cloning git repository')
      await exec(`git clone https://github.com/smooth-code/${trainingName}.git`)
      console.log('Go to exercise 1')
      await exec(`cd ${trainingName} && git checkout start-exercise-1`)
      console.log('Installing dependencies...')
      await exec(`cd ${trainingName} && npm install`)
      console.log(`Project initialized "cd ${trainingName}" to start`)
    })
