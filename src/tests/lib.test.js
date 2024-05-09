const testCases = [
  {
    input: ['', ''],
    expected: true
  },
  {
    input: [0, 0],
    expected: true
  },
  {
    input: [false, false],
    expected: true
  },
  {
    input: [[], []],
    expected: true
  },
  {
    input: [{}, {}],
    expected: true
  },
  {
    input: [undefined, undefined],
    expected: true
  },
  {
    input: [null, null],
    expected: true
  },
  {
    input: [[0, 1], [0, 1]],
    expected: true
  },
  {
    input: [
      { name: 'a', children: [{ name: 'b' }, {name: 'c', age: 12}] },
      { name: 'a', children: [{ name: 'b' }, {name: 'c', age: 12}] }
    ],
    expected: true
  },
  {
    input: ['a', 'b'],
    expected: false
  },
  {
    input: [false, true],
    expected: false
  },
  {
    input: [1, 0],
    expected: false
  },
  {
    input: [undefined, null],
    expected: false
  },
  {
    input: ['', null],
    expected: false
  },
  {
    input: [{}, null],
    expected: false
  },
  {
    input: [[], null],
    expected: false
  },
  {
    input: ['1', 1],
    expected: false
  },
  {
    input: ['true', true],
    expected: false
  },
  {
    input: ['false', false],
    expected: false
  },
  {
    input: [0, false],
    expected: false
  },
  {
    input: [[], {}],
    expected: false
  },
  {
    input: [[1], [1, 2]],
    expected: false
  },
  {
    input: [[1], ['1']],
    expected: false
  },
  {
    input: [{a: 'a'}, {a: 'a', b: 'b'}],
    expected: false
  },
  {
    input: [[1, {}], [1, {a: true}]],
    expected: false
  }
]

addTest({
  title: 'lib.test.js',
  test: () => testCases.map(({ input, expected }) => {
    try {
      const output = assertEq(...input)
      return getTestResult(output === expected, input, output, expected)
    }  catch (err) {
      return { error: `Error: with input ${JSON.stringify(input)}, the following error is thrown: ${err}` }
    }
  })
})
