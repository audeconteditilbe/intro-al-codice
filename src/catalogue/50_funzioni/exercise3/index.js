function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + 'return main')
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
  const main = code()
  const res = main(input)
  
  if (assertEq(res, expected)) {
    return { success: `Ottimo! Con input ${pretty(input)}, la funzione restituisce ${pretty(res)}` }
  }
  return { error: `Errore: con input ${pretty(input)}, la funzione restituisce ${pretty(res)}, ma dovrebbe restituire ${pretty(expected)}` }
}

const _tests = [
  testFunction(['A', 1, 'r', true, 'i', null, 'a', ['wrong'], 'n', {}, 'n', undefined, 'a'], 'Arianna'),
  testFunction(['A', 'r', 'i', 'anna ', 'e ', 'Claudio ', 'vanno d\'accordo'], 'Arianna e Claudio vanno d\'accordo'),
  testFunction('str', ''),
  testFunction(false, ''),
  testFunction(true, ''),
  testFunction([1, 2, 3], ''),
  testFunction([], ''),
  testFunction({a: 'a'}, ''),
  testFunction(undefined, ''),
  testFunction(null, ''),
]

const exercise = {
  name: 'Esercizio',
  text: '\
  Scrivi una funzione di nome `main`.\
  Questa funzione deve accettare come argomento un\'array, e produrre come risultato la concatenazione delle stringhe contenute nell\'array.\
  NOTA BENE:\
  devi concatenare solo i valori di tipo stringa!\
  Qualore non ci fossero stringhe nell\'array in input, il risultato deve essereuna stringa vuota.',
  initialValue: '',
  validation: _validation,
  tests: _tests,
}

loadExercise(exercise)
