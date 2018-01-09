/**
 ** IO functor specifications
 **/
import R from 'ramda'
import test from 'ava'
import { IO } from '../../../src/lib/functors/IO'
import utils from '../../../src/lib/utils'
import fs from 'fs'
import p from 'relative-path'

IO.of = function(f) {
  return new IO(function() {
    return f
  })
}

var join = io => io.join()

const map = R.curry(function(f, io) {
  return io.map(f)
})

const chain = R.curry(function(f, io) {
  return io.chain(f)
})

const readFile = function(fileName) {
  return new IO(function() {
    return fs.readFileSync(fileName, 'utf-8')
  })
}

const __f = x => console.log(x)
const print = function(f) {
  console.log(`im in printer. recived  ${f}`)
  return IO.of(function() {
    console.log(f.unsafePerformIO())
    return f
  })
}
const log = R.bind(console.log, console)
const cat = R.compose(R.tap(log), map(print), R.tap(log), readFile)
const head = x => x[0]
const catFirstChar = R.compose(R.tap(log), chain(head), cat)
test('IO monad specifications', t => {
  const file2read = p('./', 'IOSpecs.js')
  console.log(`file2read = ${file2read}`)
  // let x = readFile(file2read).unsafePerformIO()
  let x = cat(file2read)
  console.log(` x = ${JSON.stringify(x)}`)
  t.pass('under construction')
})
