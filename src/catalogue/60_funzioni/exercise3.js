const _target = function main (arr)
{
  let result = ''
  if (Array.isArray(arr))
  {
    for (el of arr)
    {
      if (typeof el === 'string')
      {
        result = result + el
      }
    }
  }
  return result
}

const _solution = `\
function main (arr)
{
  let result = ''
  if (Array.isArray(arr))
  {
    for (el of arr)
    {
      if (typeof el === 'string')
      {
        result = result + el
      }
    }
  }
  return result
}`

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + '\nreturn main')
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
  const main = code()
  return [
    compare(main, _target, ['A', 1, 'r', true, 'i', null, 'a', ['wrong'], 'n', {}, 'n', undefined, 'a']),
    compare(main, _target, ['A', 'r', 'i', 'anna ', 'e ', 'Claudio ', 'vanno d\'accordo']),
    compare(main, _target, 'str'),
    compare(main, _target, false),
    compare(main, _target, true),
    compare(main, _target, [1, 2, 3]),
    compare(main, _target, []),
    compare(main, _target, {a: 'a'}),
    compare(main, _target, undefined),
    compare(main, _target, null),
  ]
}
const _randomTest = (code) => {
  const main = code()
  return Array(100).fill(0).map(() => compare(main, _target, rnd()))
}
const exercise = {
  name: 'Esercizio: concateniamoci 😏',
  text: 'Scrivi una funzione di nome `main`'
    + ' Questa funzione deve accettare un argomento, verificare che sia un\'array, e produrre come risultato la concatenazione'
    + ' delle stringhe contenute nell\'array.'
    + ' Se l\'input non è un\'array, o se non ci sono stringhe nell\'array, il risultato deve essere una stringa vuota.'
    + ' NOTA BENE: devi concatenare solo i valori di tipo stringa!',
  initialValue: '',
  validation: _validation,
  solution: _solution,
  test: _test,
  randomTest: _randomTest
}

new ExercisePageManager().loadExercise(exercise)
