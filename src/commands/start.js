import { exec } from 'mz/child_process'

export default program =>
  program
    .command('start <exercise>')
    .description('Go to the beginning of an exercise')
    .action(async (exercise, options) => {
      console.log('Stashing changes...')
      await exec(`git stash -u`)
      console.log(`Going to the start of exercise ${exercise}`)
      await exec(`git checkout start-exercise-${exercise}`)
      console.log(`Installing dependencies...`)
      await exec(`npm install`)
      console.log('Project ready')
    })
