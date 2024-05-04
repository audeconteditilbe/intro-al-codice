function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + 'return findWaldos')
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
  
  if (assertEq(res, expected)) {
    return { success: `Ottimo! Con input ${pretty(input)}, la funzione restituisce ${pretty(res)}` }
  }
  return { error: `Errore: con input ${pretty(input)}, la funzione restituisce ${pretty(res)}, ma dovrebbe restituire ${pretty(expected)}` }
}

const _tests = [
  testFunction(['Waldo', 'Waldo', 'Arianna'], [0, 1]),
  testFunction(['Arianna'], []),
  testFunction([], []),
  testFunction([1, 'Waldo', 'Arianna'], [1]),
  testFunction(['Not Waldo', 'waldo', 'Waldo'], [2]),
]

const exercise = {
  name: 'Esercizio: find Waldo!',
  text: ''+
  + 'Scrivi una funzione di nome `findWaldos`.'
  + 'Questa funzione deve accettare come argomento un\'array, e produrre come risultato un\'array che contenga'
  + 'tutte le posizioni all\'interno dell\'array in cui si trova la stringa "Waldo".'
  + 'Qualore "Waldo" non faccia parte dell\'array in input, la funzione deve ritornare un\'array vuoto.',
  initialValue: '',
  validation: _validation,
  tests: _tests,
}

loadExercise(exercise)
