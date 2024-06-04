const _target = function main () {}

const _solution = ``

const _initialValue = ``

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function ('')
  } catch (err) {
    error = `Ahia... il codice che hai scritto non è valido!\n${err}`
    return { error }
  }

  return {
    success: 'Ottimo! Il codice che hai scritto è valido!',
    code
  }
}

const _test = (code) => {
  return []
}

const _randomTest = (code) => {
  return []
}

const exercise = {
  name: 'Esercizio: TODO',
  text: 'Ancora devo pensare a cosa mettere qui 😊',
  initialValue: _initialValue,
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)

