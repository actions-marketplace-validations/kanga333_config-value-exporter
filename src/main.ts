import * as core from '@actions/core'
import {read} from './read'

async function run(): Promise<void> {
  try {
    const key: string = core.getInput('key')
    const file: string = core.getInput('file')
    const format: string = core.getInput('format')
    core.debug(`Read ${key} from ${file}`)
    const result = read(key, file, format)
    core.debug(`Result is ${result}`)
    core.setOutput('result', result)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
