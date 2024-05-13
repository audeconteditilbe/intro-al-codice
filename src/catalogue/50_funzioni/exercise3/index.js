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
    error = `Ahia... il codice che hai scritto non è valido!\n${error}`
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
    testing(main, _target, ['A', 1, 'r', true, 'i', null, 'a', ['wrong'], 'n', {}, 'n', undefined, 'a']),
    testing(main, _target, ['A', 'r', 'i', 'anna ', 'e ', 'Claudio ', 'vanno d\'accordo']),
    testing(main, _target, 'str'),
    testing(main, _target, false),
    testing(main, _target, true),
    testing(main, _target, [1, 2, 3]),
    testing(main, _target, []),
    testing(main, _target, {a: 'a'}),
    testing(main, _target, undefined),
    testing(main, _target, null),
  ]
}
const _randomTest = (code) => {
  const main = code()
  return Array(100).fill(0).map(() => testing(main, _target, rnd()))
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
