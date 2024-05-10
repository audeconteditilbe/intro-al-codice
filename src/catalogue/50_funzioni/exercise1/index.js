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
const _test = (code) => {
  const isAdult = code()
  return Array(25).fill(0).map((_, idx) => testing(isAdult, _target, idx))
}

const _randomTest = (code) => {
  const isAdult = code()
  return [
    ...Array(100).fill(0).map(() => testing(isAdult, _target, rnd())),
    ...Array(10).fill(0).map(() => testing(isAdult, _target, [rnd(), rnd()])),
  ]
}

const exercise = {
  name: 'Esercizio: vietato ai minori 🔞',
  text: 'Completa la funzione in modo che ritorni true se l\'argomento age è maggiore o uguale di 18, false altrimenti',
  initialValue: _initialValue,
  target: _target,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)

