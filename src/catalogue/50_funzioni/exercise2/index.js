const _initialValue = `\
function isAdult (age)
{
  
}`

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + '\nreturn isAdult')
  } catch (err) {
    error = `Ahia... il codice che hai scritto non è valido!\n${error}`
    return { error }
  }

  return {
    success: 'Ottimo! Il codice che hai scritto è valido!',
    code
  }
}
const testFunction = (input, expected) => (code) => {
  const isAdult = code()
  const res = isAdult(input)
  return getTestResult(assertEq(res, expected), input, res, expected)
}
const _tests = [
  ...Array(25).fill(0).map((_, idx) => testFunction(idx, idx >= 18)),
  testFunction(undefined, undefined),
  testFunction('str', undefined),
  testFunction('20', undefined),
  testFunction(false, undefined),
  testFunction(true, undefined),
  testFunction([1, 2, 3], undefined),
]

const exercise = {
  name: 'Esercizio: vietato ai minori 🔞... e a chi non ha un\'età',
  text: 'Completa la funzione in modo che ritorni true se l\'argomento age è maggiore o uguale di 18,'
    + ' false se minore di 18,'
    + ' e undefined qualora age non sia un numero.',
  initialValue: _initialValue,
  validation: _validation,
  tests: _tests,
}

new ExercisePageManager().loadExercise(exercise)
