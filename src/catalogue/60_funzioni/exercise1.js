const _target = function isAdult (age)
{
  return age >= 18
}
const _solution = `\
function isAdult (age)
{
  return age >= 18
}`

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
    error = `Ahia... il codice che hai scritto non è valido!\n${err}`
    return { error }
  }

  return {
    success: 'Ottimo! Il codice che hai scritto è valido!',
    code
  }
}
const _test = (code) => {
  const isAdult = code()
  return Array(25).fill(0).map((_, idx) => compare(isAdult, _target, idx))
}

const _randomTest = (code) => {
  const isAdult = code()
  return Array(100).fill(0).map(() => compare(isAdult, _target, rnd('integer')))
}

const exercise = {
  name: 'Esercizio: vietato ai minori 🔞',
  text: 'Completa la funzione in modo che ritorni true se l\'argomento numerico age è maggiore o uguale di 18, false altrimenti',
  initialValue: _initialValue,
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)

