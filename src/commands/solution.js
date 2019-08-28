import { exec } from 'mz/child_process'
import open from 'open'

async function getProjectUrl() {
  const remoteStr = String(await exec('git remote -v'))
  const matches = remoteStr.match(/(https.*)\.git/)
  return matches[1]
}

export default program =>
  program
    .command('solution <exercise>')
    .description('Get the solution of an exercise')
    .action(async (exercise, options) => {
      const projectUrl = await getProjectUrl()
      open(
        `${projectUrl}/compare/start-exercise-${exercise}...end-exercise-${exercise}`,
        { wait: false },
      )
    })
