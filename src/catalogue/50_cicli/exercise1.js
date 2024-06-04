const _target = function main (obj1, obj2) {
  let areEqual = true
  let fieldNames = Object.keys(obj1)
  let L = fieldNames.length
  let idx = 0
  while (idx < L)
  {
    let field = fieldNames[idx]
    areEqual = areEqual && (obj1[field] === obj2[field])
    idx = idx + 1
  }
  return areEqual
}

const _solution = `
let areEqual = true

let fieldNames = Object.keys(obj1)
let L = fieldNames.length
let idx = 0
while (idx < L)
{
  let field = fieldNames[idx]
  areEqual = areEqual && (obj1[field] === obj2[field])
  idx = idx + 1
}
`

const _initialValue = `
// let obj = { ... }
// let obj2 = { ... }

let areEqual = ...
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
  
  const data = [{ name: 'bob' }, { one: 1, two: 2 }, { name: 'Arianna', hot: true }]
  const falseData = [{ name: 'bob2' }, { one: 1, two: 3 }, { name: 'Claudio', hot: true }]
  return [
    ...data.map((obj, idx) => testing(main, _target, obj, falseData[idx])),
    ...data.map((obj) => testing(main, _target, obj, obj)),
    testing(main, _target, {}, {}),
  ]
}

const _randomTest = (code) => {
  const main = code()

  return [
    ...Array(50).fill(0).map(() => {
      const obj = rnd('object', 0, 0)
      return testing(main, _target, obj, obj)
    }),
    ...Array(50).fill(0).map(() => {
      const obj = rnd('object', 0, 0)
      const field = Object.keys(obj)[0]
      const fake = {...obj, [field]: 'unk'}
      return testing(main, _target, obj, fake)
    })
  ]
}

const exercise = {
  name: 'Esercizio: confronta oggetti 🔎',
  text: 'Modifica il codice di seguito in modo che, al termine dell\'esecuzione, il valore di "areEqual"'
  + ' sia uguale a true se "obj1" e "obj2" hanno lo stesso contenuto, false altrimenti. Puoi assumere che:'
  + `
  <ul>
    <li>
      "obj1" e "obj2" abbiano gli stessi campi (ad esempio, se "obj1" ha solamente i campi "name" e "lastname",
      anche "obj2" avrà solamente campi "name" e "lastname")
    </li>
    <li>
      "obj1" e "obj2" non abbiano al loro interno campi di tipo oggetto o array
    </li>
  </ul>`,
  initialValue: _initialValue,
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)

