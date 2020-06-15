import { Given, When, defineParameterType, Before, After } from '@cucumber/fake-cucumber'
import assert from 'assert'
import fs from 'fs'

class Flight {
  constructor(public readonly from: string, public readonly to: string) {}
}

defineParameterType({
  name: 'flight',
  regexp: /([A-Z]{3})-([A-Z]{3})/,
  transformer(from: string, to: string) {
    return new Flight(from, to)
  },
})

Given('{flight} has been delayed {int} minutes', function(
  flight: Flight,
  delay: number
) {
  assert.equal(flight.from, 'LHR')
  assert.equal(flight.to, 'CDG')
  assert.equal(delay, 45)
})

Given('a passed step', (table: string[][]) => {
})

When('a step has failed', () => {
  throw new Error('Oh no we have an error')
})

Before('@hooked', function () {
  this.log('This hook is going to fail')
  this.log('This displays a \x1b[31mr\x1b[0m\x1b[91ma\x1b[0m\x1b[33mi\x1b[0m\x1b[32mn\x1b[0m\x1b[34mb\x1b[0m\x1b[95mo\x1b[0m\x1b[35mw\x1b[0m')
  throw new Error('Oh no we have an error')
})

Before('@passedHooked', function () {
  this.log('This hook passed before the scenario')
})

After('@passedHooked', async function () {
  this.log('This hook passed after the scenario and attached a screenshot')
  await this.attach(
    fs.createReadStream(__dirname + '/cucumber-screenshot.png'),
    'image/png'
  )
})