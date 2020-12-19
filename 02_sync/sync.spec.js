const Lodash = require('./sync')
  let _ = new Lodash()

describe('Lodash compact', () => {
  let array = [false, 42, 0, '', true, null, 'hello']

  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello']
  })

  afterAll(() => {
    _ = new Lodash()
  })

  test('should be defined', () => {
    expect(_.compact).toBeDefined()
    expect(_.compact).not.toBeUndefined()
  })

  test('should working array be editable', () => {
    array.push(...['one', 'two'])
    expect(array).toContain('one')
    expect(array).toContain('two')
  })

  test('should remove false value array', () => {
    const res = [42, true, 'hello']
    expect(_.compact(array)).toEqual(res)
  })

  test('should NOT contain falsy value', () => {
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain(null)
    expect(_.compact(array)).not.toContain('')
  })
})

describe('Lodash group by', () => {
  test('should be defined', () => {
    expect(_.groupBy).toBeDefined()
    expect(_.groupBy).not.toBeUndefined()
  })

  test('should group array items by Math.floor', () => {
    const array = [2.2, 2.4, 4.2, 3.1]
    const res = {
      2: [2.2, 2.4],
      4: [4.2],
      3: [3.1]
    }
    expect(_.groupBy(array, Math.floor)).toEqual(res)
  })

  test('should group array items by length', () => {
    const array = ['one', 'two', 'three']
    const res = {
      5: ['three'],
      3: ['one', 'two']
    }
    expect(_.groupBy(array, 'length')).toEqual(res)
  })

  test('should NOT return array', () => {
    expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
  })
})
