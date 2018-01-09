/**
 ** data.either specifications
 **/
import R from 'ramda'
import test from 'ava'
import moment from 'moment'
import utils from '../../../src/lib/utils'
import Either from 'data.either'
import Task from 'data.task'

const unsafeRun = task =>
  task.fork(err => Either.Left('error occured!'), data => Either.of(data))
test('data.task isLeft & isRight specifications', t => {
  let _right = Either.Right(1)
  let _left = Either.Left(-1)
  let _right2 = _right.map(x => x + 1)
  let safeDiv = x => y =>
    x == 0 ? Either.Left('div by 0 is undefined') : Either.of(y / x)
  let _right_1 = t.truthy(_right.isRight)
  t.truthy(!_right.isLeft)
  t.truthy(_right.getOrElse(x => 2) === 1)
  t.truthy(_right2.getOrElse(x => 3) === 2)
  t.truthy(_left.isLeft)
  t.truthy(_left.orElse(x => x * 3) === -3)
  t.deepEqual(_right2, Either.of(2))
  t.deepEqual(_right2.chain(safeDiv(2)), Either.of(1))
  t.truthy(_right2.chain(safeDiv(0)).isLeft)
})

test('composing task and data.either', t => {
  const task_1 = Task.of(1)
  const taskRight = Task.of(Either.of(1))
  const taskLeft = Task.of(Either.Left(-1))
  let res1 = unsafeRun(task_1)
  console.log(`res1 = ${res1}`)
  t.deepEqual(res1, Either.of(1))
})

test.only('composing task and data.either', t => {
  const task_x = x => Task.of(x)
  let composedTask = R.compose(unsafeRun, task_x)
  let computed = composedTask(10)
  console.log(`computed = ${computed}`)
  t.deepEqual(computed, Either.of(10))
})
