const _target = function isAdult (age)
{
  if (typeof age === 'number')
  {
    return age >= 18
  }
}

const _solution = `\
function isAdult (age)
{
  if (typeof age === 'number')
  {
    return age >= 18
  }
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
  return [
    ...Array(25).fill(0).map((_, idx) => compare(isAdult, _target, idx)),
    compare(isAdult, _target, undefined),
    compare(isAdult, _target, 'str'),
    compare(isAdult, _target, '20'),
    compare(isAdult, _target, false),
    compare(isAdult, _target, true),
    compare(isAdult, _target, { name: 'Arianna' }),
    compare(isAdult, _target, [1, 2, 3]),
  ]
}
const _randomTest = (code) => {
  const isAdult = code()
  return Array(100).fill(0).map(() => compare(isAdult, _target, rnd()))
}
const exercise = {
  name: 'Esercizio: vietato ai minori 🔞... e a chi non ha un\'età',
  text: 'Completa la funzione in modo che ritorni true se l\'argomento age è maggiore o uguale di 18,'
    + ' false se minore di 18,'
    + ' e undefined qualora age non sia un numero.',
  initialValue: _initialValue,
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)
