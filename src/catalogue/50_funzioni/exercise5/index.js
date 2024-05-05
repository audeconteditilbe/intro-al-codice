function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + 'return introduceFamily')
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
  const introduceFamily = code()
  const res = introduceFamily(input)
  
  if (assertEq(res, expected)) {
    return { success: `Ottimo! Con input ${pretty(input)}, la funzione restituisce ${pretty(res)}` }
  }
  return { error: `Errore: con input ${pretty(input)}, la funzione restituisce ${pretty(res)}, ma dovrebbe restituire ${pretty(expected)}` }
}

const _tests = [
  testFunction(
    {
      name: "Elon Musk",
      children: [
        { name: 'Nevada Alexander Musk' }, // ❤️
        { name: 'Griffin Musk' },
        { name: 'Vivian Jenna Wilson' },
        { name: 'Kai Musk' },
        { name: 'Saxon Musk' },
        { name: 'Damian Musk' },
        { name: 'Kai Musk' },
        { name: 'Saxon Musk' },
        { name: 'Damian Musk' },
        { name: 'X AE A-XII Musk' },
        { name: 'Exa Dark Sideræl Musk' }
      ]
    },
    [
      "Hi! I am Elon Musk",
      "Hi! I am Nevada Alexander Musk",
      "Hi! I am Griffin Musk",
      "Hi! I am Vivian Jenna Wilson",
      "Hi! I am Kai Musk",
      "Hi! I am Saxon Musk",
      "Hi! I am Damian Musk",
      "Hi! I am Kai Musk",
      "Hi! I am Saxon Musk",
      "Hi! I am Damian Musk",
      "Hi! I am X AE A-XII Musk",
      "Hi! I am Exa Dark Sideræl Musk"
    ]
  ),
  testFunction({ name: 'Bob', children: [] }, ['Hi! I am Bob']),
  testFunction(
    { name: 'Bruce', children: [{ name: 'Chettina' }] },
    ['Hi! I am Bruce', 'Hi! I am Chettina']
  ),
]

const exercise = {
  name: 'Esercizio: sono pessimo coi nomi',
  text: ' Scrivi una funzione di nome `introduceFamily`.'
  + ' Questa accetta come argomento un oggetto con due campi: "name", "children".'
  + ' "name" è un campo di tipo stringa, mentre "children" è un campo di tipo array, in cui ogni elemento'
  + ' è a sua volta un oggetto con un campo "name".'
  + ' La funzione deve ritornare un\'array di stringhe come "Hi! I am <nome>", in cui `<nome>` è dato dal campo "name" '
  + ' dell\'oggetto esterno e degli elementi all\'interno del campo "children".'
  + ' NOTA: per questo esercizio non è necessario eseguire validazioni sugli input.'
  + `
  Esempio:
    <a href=https://babynames.com/blogs/celebrities/all-of-elon-musks-children-so-far>Un esempio a caso</a> 🤨
    
    Con input:
    <code>
      let family = {
        name: "Elon Musk",
        children: [
          { name: "Nevada Alexander Musk" }, // ❤️
          { name: "Griffin Musk" },
          { name: "Vivian Jenna Wilson" },
          { name: "Kai Musk" },
          { name: "Saxon Musk" },
          { name: "Damian Musk" },
          { name: "Kai Musk" },
          { name: "Saxon Musk" },
          { name: "Damian Musk" },
          { name: "X AE A-XII Musk" },
          { name: "Exa Dark Sideræl Musk" }
        ]
      }
    </code>
    
    <code>introduceFamily(family)</code> deve ritornare:
    
    <code>
      [
        "Hi! I am Elon Musk",
        "Hi! I am Nevada Alexander Musk",
        "Hi! I am Griffin Musk",
        "Hi! I am Vivian Jenna Wilson",
        "Hi! I am Kai Musk",
        "Hi! I am Saxon Musk",
        "Hi! I am Damian Musk",
        "Hi! I am Kai Musk",
        "Hi! I am Saxon Musk",
        "Hi! I am Damian Musk",
        "Hi! I am X AE A-XII Musk",
        "Hi! I am Exa Dark Sideræl Musk",
      ]
    </code>
  `,
  initialValue: '',
  validation: _validation,
  tests: _tests,
}

new ExercisePageManager().loadExercise(exercise)
