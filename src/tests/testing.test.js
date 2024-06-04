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
  title: 'assertEq',
  test: () => testCases.map(({ input, expected }) => {
    try {
      const output = assertEq(...input)
      return getTestResult(output === expected ? 'success' : 'error', input, output, expected)
    }  catch (err) {
      return { status: 'error', msg: `Error: with input ${JSON.stringify(input)}, the following error is thrown: ${err}` }
    }
  })
})

addTest({
  title: 'rnd',
  test: () => Array(10).fill(0)
    .flatMap(() => ([
      ['string', 'integ', false],
      ['integer', 'number', false],
      ['float', 'number', false],
      ['boolean', 'boolean', false],
      ['object', 'object', false],
      ['array', 'object', true],
    ])
  ).map(([input, expectedType, expectedIsArr]) => {
    try {
        const obj = rnd(input)
        const result = (typeof obj === expectedType) && (Array.isArray(obj) === expectedIsArr)
        return getTestResult(result ? 'success' : 'error', [input], obj, [expectedType, expectedIsArr])
      }  catch (err) {
        return { status: 'error', msg: `Error: with input ${JSON.stringify(input)}, the following error is thrown: ${err}` }
      }
    })
})