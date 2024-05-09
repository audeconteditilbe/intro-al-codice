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

const testFunction = (input, expected) => (code) => {
  const main = code()
  const res = main(input)
  
  return getTestResult(assertEq(res, expected), input, res, expected)
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
  name: 'Esercizio: concateniamoci 😏',
  text: 'Scrivi una funzione di nome `main`'
    + ' Questa funzione deve accettare un argomento, verificare che sia un\'array, e produrre come risultato la concatenazione'
    + ' delle stringhe contenute nell\'array.'
    + ' Se l\'input non è un\'array, o se non ci sono stringhe nell\'array, il risultato deve essere una stringa vuota.'
    + ' NOTA BENE: devi concatenare solo i valori di tipo stringa!',
  initialValue: '',
  validation: _validation,
  tests: _tests,
}

new ExercisePageManager().loadExercise(exercise)
