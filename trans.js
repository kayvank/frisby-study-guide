const R = require('ramda')

const dot = R.curry(function(prop, obj) {
  return obj[prop]
})
const add = function(x, y) {
  return x + y
}
const add10 = function(x) {
  return add(10, x)
}
let res = Maybe.of(14).map(add10)
let res2 = Maybe.of('Malkovich Malkovich').map(R.match(/a/gi))
const map = R.curry(function(f, __functor) {
  return __functor.map(f)
})

const safeHead = function(x) {
  return Maybe.of(x[0])
}

const streetName = R.compose(map(dot('street')), safeHead, dot('address'))

let homes = [
  {
    address: [{ street: 'shady ln, number: 432' }]
  },
  {
    address: []
  }
]
let res3 = streetName(homes[0])
let res4 = streetName(homes[1])
console.log(`res4 = ${JSON.stringify(res4)}`)
console.log(`res3 = ${JSON.stringify(res3)}`)
console.log(`${JSON.stringify(res)}`)
console.log(`${JSON.stringify(res2)}`)
console.log('hi there')
