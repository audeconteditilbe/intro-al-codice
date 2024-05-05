const _initialValue = `\
function isAdult (age) {
  
}`

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + 'return isAdult')
  } catch (err) {
    error = `Ahia... il codice che hai scritto non è valido!\n${error}`
    return { error }
  }

  return {
    success: 'Ottimo! Il codice che hai scritto è valido!',
    code
  }
}
const _tests = Array(25).fill(0).map((_, idx) => {
  return (code) => {
    const isAdult = code()
    const input = idx
    const expected = idx >= 18
    const res = isAdult(input)
    
    if (assertEq(res, expected)) {
      return { success: `Ottimo! Con input ${pretty(input)}, la funzione restituisce ${pretty(res)}` }
    }
    return { error: `Errore: con input ${pretty(input)}, la funzione restituisce ${pretty(res)}, ma dovrebbe restituire ${pretty(expected)}` }
  }
})

const exercise = {
  name: 'Esercizio: vietato ai minori 🔞',
  text: 'Completa la funzione in modo che ritorni true se l\'argomento age è maggiore o uguale di 18, false altrimenti',
  initialValue: _initialValue,
  validation: _validation,
  tests: _tests,
}

new ExercisePageManager().loadExercise(exercise)

