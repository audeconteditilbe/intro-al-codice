const _target = function main (names) {
  let L = 0
  for (let _ of names)
  {
    L = L + 1
  }
  return L
}

const _solution = `
let L = 0
for (let name of names)
{
  L = L + 1
}
`

const _initialValue = `
// Immagina che siano qualche riga più sia stato definito l'array names
// let names = [ ... ]
let L
`

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (`
    function main (names) {
      ${codeStr}
      return L
    }
    return main
    `)
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
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    ['a', 'b', 'c'],
    [false, false]
  ].map((input) => compare(main, _target, input))
}

const _randomTest = (code) => {
  const main = code()
  return Array(100).fill(0).map(() => compare(main, _target, rnd('array')))
}

const exercise = {
  name: 'Esercizio: la lunghezza non è tutto... ma è importante',
  text: 'Fingiamo che non esista la proprietà <code>lenght</code> degli array: scrivi un ciclo <code>for of</code> di modo che al termine <code>L</code>'
  + ' sia uguale alla lunghezza dell\'array <code>names</code>, ma non accedere mai a <code>names.length</code>!'
  + '<br/>Nota come un ciclo for-of non serve usare a <code>.lenght</code>. Sapresti completare lo stesso esercizio con un ciclo for classico o un'
  + ' while? Liberissima di provarci, ma non credo! 🙃',
  initialValue: _initialValue,
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)

