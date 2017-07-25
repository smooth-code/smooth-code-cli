import { exec } from 'mz/child_process'

const parseLogLine = logLine => {
  const matches = logLine.match(/^(.+) \[ex\-(\d+)]/)
  return matches
    ? {
        hash: matches[1],
        exercise: Number(matches[2]),
      }
    : null
}

export default program =>
  program
    .command('tag')
    .description('Tag all exercises [only for trainer]')
    .action(async () => {
      const logs = String(await exec('git log --pretty=oneline'))
      const commits = logs.split('\n').map(parseLogLine).filter(x => x)
      console.log(`${commits.length} valid commits detected`)
      for (const commit of commits) {
        await exec(`git tag -f end-exercise-${commit.exercise} ${commit.hash} `)
        await exec(
          `git tag -f start-exercise-${commit.exercise + 1} ${commit.hash}`,
        )
        console.log(`Tagging exercise #${commit.exercise}`)
      }
    })
