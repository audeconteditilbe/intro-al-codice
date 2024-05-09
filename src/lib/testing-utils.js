function pretty (input) {
  // if (typeof input === 'object' && !Array.isArray(input) && input !== null) {
  //   return JSON.stringify(input, null, 2)
  // }
  return JSON.stringify(input)
}

function assertEq (result, expected) {
  if (typeof result !== typeof expected) {
    return false
  }

  if (Array.isArray(result) || Array.isArray(expected)) {
    return Array.isArray(expected)
      && Array.isArray(result)
      && result.length === expected.length
      && result.every((r, i) => assertEq(r, expected[i]))
  }

  if (result === null || expected === null) {
    return expected === result
  }

  if (typeof result === 'object') {
    return assertEq(Object.entries(result), Object.entries(expected))
  }

  return result === expected
}

const getTestResult = (success, input, output, expected) => {
  if (success) {
    return { success: `Ottimo! Con input ${pretty(input)}, la funzione restituisce ${pretty(output)}` }
  }
  return { error: `Errore: con input ${pretty(input)}, la funzione restituisce ${pretty(output)}, ma dovrebbe restituire ${pretty(expected)}` }
}

const randomTesting = (fun, target, n = 50) => {
  return ['string', 'integer', 'float', 'boolean', 'object', 'array']
    .map((type) => Array(n).fill(0).map(() => rnd(type)))
    .map((data) => {
      const output = fun(data)
      const expected = target(data)
      return getTestResult(assertEq(output, expected), data, output, expected)
    })
}
