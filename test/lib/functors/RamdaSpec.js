/**
 ** Ramda Exercises
 **
 **/
import R from 'ramda'
import test from 'ava'
import Maybe from 'data.maybe'
import Either from 'data.either'

const madd3 = R.lift(R.curry((a, b, c) => a + b + c))
test('Ramda lift Maybe functor demo', t => {
  t.deepEqual(
    madd3(Maybe.Just(4), Maybe.Just(5), Maybe.Just(1)),
    Maybe.Just(10)
  )
  const computed = madd3(Maybe.Just(4), Maybe.Just(5), Maybe.Just(1))
  t.truthy(madd3(computed === Maybe.Just(10)))
})

test('Ramda Either computation short circuits demo', t => {
  t.deepEqual(
    madd3(Either.Left(4), Either.Left(5), Either.Left(1)),
    Either.Left(4)
  )
})
