function pretty (input) {
  typeof input === 'string' ? JSON.stringify(input) : input
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
