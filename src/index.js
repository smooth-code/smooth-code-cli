import program from 'commander'
import { exec } from 'mz/child_process'
import pkg from '../package.json'
import tag from './commands/tag'
import start from './commands/start'
import end from './commands/end'
import init from './commands/init'
import solution from './commands/solution'

program.version(pkg.version)

init(program)
start(program)
end(program)
solution(program)
tag(program)

program.parse(process.argv)

if (program.args.length === 0) program.help()
