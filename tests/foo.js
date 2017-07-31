import test from 'ava'
import fn from '../src/index'

test('Foo', t => {
  t.true(fn(1) === 1)
})
