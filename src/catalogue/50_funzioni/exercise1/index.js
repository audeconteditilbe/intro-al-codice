const _target = (age) => {
  return typeof age === 'number' && age >= 18
}

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
const _tests = Array(25).fill(0)
  .map((_, idx) => {
    return (code) => {
      const isAdult = code()
      const input = idx
      const expected = idx >= 18
      const res = isAdult(input)
      const success = assertEq(res, expected)
      return getTestResult(success, input, res, expected)
    }
  })

const _randomTest = (code) => {
  const isAdult = code()
  return randomTesting(isAdult, _target, 10)
}

const exercise = {
  name: 'Esercizio: vietato ai minori 🔞',
  text: 'Completa la funzione in modo che ritorni true se l\'argomento age è maggiore o uguale di 18, false altrimenti',
  initialValue: _initialValue,
  validation: _validation,
  tests: _tests,
  randomTest: _randomTest,
  target: _target
}

new ExercisePageManager().loadExercise(exercise)

