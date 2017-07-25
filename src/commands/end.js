import { exec } from 'mz/child_process'

export default program =>
  program
    .command('end <exercise>')
    .description('Go to the end of an exercise')
    .action(async (exercise, options) => {
      console.log('Stashing changes...')
      await exec(`git stash save "end exercise ${exercise}"`)
      console.log(`Going to the end of exercise ${exercise}`)
      await exec(`git checkout end-exercise-${exercise}`)
      console.log(`Installing dependencies...`)
      await exec(`npm install`)
      console.log('Project ready')
    })
