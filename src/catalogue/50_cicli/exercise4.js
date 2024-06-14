const _target = function main (obj1, obj2) {
  
  
  return areEqual
}


const _solution = `
`

const _initialValue = `
// Immagina che siano qualche riga più su siano stati definiti obj1 e obj2
// let obj = { ... }
// let obj2 = { ... }

let areEqual
`

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (`
    function main (obj1, obj2) {
      ${codeStr}
      return areEqual
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
  
  const data = [{ name: 'bob' }, { one: 1, two: 2 }, { name: 'Arianna', hot: true }, {}]
  const falseData = [{ name: 'bob2' }, { one: 1, two: 3 }, { name: 'Claudio', hot: true }]
  return [
    ...data.map((obj, idx) => compare(main, _target, obj, falseData[idx])),
    ...data.map((obj) => compare(main, _target, obj, obj)),
    ...data.map((obj) => compare(main, _target, obj, {})),
    ...data.map((obj) => compare(main, _target, obj, {...obj, prop: 'unk'})),
  ]
}

const _randomTest = (code) => {
  const main = code()

  return [
    ...Array(50).fill(0).map(() => {
      const obj = rnd('object', 0, 0)
      return compare(main, _target, obj, obj)
    }),
    ...Array(50).fill(0).map(() => compare(main, _target, rnd('object', 0, 0), rnd('object', 0, 0)))
  ]
}

const exercise = {
  name: 'TODO: questo esercizio non è pronto! Esercizio: confronta oggetti (versione difficile) 🔎',
  text: 'Come nell\'esercizio precedente: modifica il codice di seguito in modo che, al termine dell\'esecuzione, il valore di "areEqual"'
  + ' sia uguale a true se "obj1" e "obj2" hanno lo stesso contenuto, false altrimenti. Puoi assumere che "obj1" e "obj2" non abbiano al'
  + ' loro interno campi di tipo oggetto o array. NON puoi assumere invece che "obj1" e "obj2" abbiano gli stessi campi.'
  + `
  <details>
    <summary>In caso te lo stessi chiedendo</summary>
    La versione SUPER difficile, in cui non vale neanche l'assunzione rimasta - in cui quindi gli oggetti possano includere al loro interno campi
    di tipo oggetto o array - non te la darò come esercizio, poichè è un po' troppo avanzata - probabilmente qua e là trovi dev professionisti che
    ne sarebbero messi in difficoltà...
    <br/>
    E' difficile ma non impossibile e se vuoi cimentarti sei assolutamente incoraggiata a farlo, ma prima ti consiglio di passare da me, in quanto
    è richiesta <a href="https://en.wikipedia.org/wiki/Recursion_(computer_science)" target="_blank">una tecnica di programmazione particolare</a>
    che non ti ho ancora mai mostrato.
  </details>
  `,
  initialValue: _initialValue,
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)

