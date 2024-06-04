const pretty = (input) => {
  // if (typeof input === 'object' && !Array.isArray(input) && input !== null) {
  //   return JSON.stringify(input, null, 2)
  // }
  return JSON.stringify(input)
}

const assertEq = (result, expected) => {
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

const getTestResult = (status, args, output, expected) => {
  if (status === 'success') {
    return { status, msg: `Ottimo! Con input ${args.map(pretty)}, il codice restituisce ${pretty(output)}` }
  }
  if (status === 'error') {
    return { status, msg: `Errore: con input ${args.map(pretty)}, il codice restituisce ${pretty(output)}, ma dovrebbe restituire ${pretty(expected)}` }
  }
  if (status === 'invalid') {
    return { status, msg: `Errore: Con input ${args.map(pretty)}, il codice ha lanciato un errore:\n${output}` }
  }
}

const testing = (fun, target, ...args) => {
  const expected = target(...args)
  let output
  try {
    output = fun(...args)
  } catch (err) {
    return getTestResult('invalid', args, err, expected)
  }
  const status = assertEq(output, expected) ? 'success' : 'error'
  return getTestResult(status, args, output, expected)
}
