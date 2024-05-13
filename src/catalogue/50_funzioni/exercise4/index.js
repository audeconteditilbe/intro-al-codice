const _target  = function findWaldos (arr) {
  let result = []
  for (let idx = 0; idx < arr.length; idx++) {
    const el = arr[idx]
    if (el === 'Waldo') {
      result.push(idx)
    }
  }
  return result
}
const _solution = `\
function findWaldos (arr)
{
  let result = []
  for (let idx = 0; idx < arr.length; idx++)
  {
    const el = arr[idx]
    if (el === 'Waldo')
    {
      result.push(idx)
    }
  }
  return result
}`

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + '\nreturn findWaldos')
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
  const findWaldos = code()
  const res = findWaldos(input)
  
  return getTestResult(assertEq(res, expected), input, res, expected)
}

const _test = (code) => {
  const findWaldos = code()
  return [
    testing(findWaldos, _target, ['Waldo', 'Waldo', 'Arianna']),
    testing(findWaldos, _target, ['Arianna']),
    testing(findWaldos, _target, []),
    testing(findWaldos, _target, [1, 'Waldo', 'Arianna']),
    testing(findWaldos, _target, ['Not Waldo', 'waldo', 'Waldo']),
  ]
}
const _randomTest = (code) => {
  const findWaldos = code()
  return Array(100).fill(0).map(() => testing(findWaldos, _target, rnd('array')))
}
const exercise = {
  name: 'Esercizio: find them Waldos!',
  text:`<div>
    <p>
      Scrivi una funzione di nome <code>findWaldos</code>.
      Questa funzione deve accettare come argomento un\'array, e produrre come risultato un\'array che contenga
      tutte le posizioni all\'interno di questa in cui si trova la stringa "Waldo".
    </p>
    <p>Qualora "Waldo" non faccia parte dell\'array in input, la funzione deve ritornare un\'array vuoto.</p>
  </div>`,
  initialValue: '',
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)
