function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + '\nreturn introduceFamily')
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
  return getTestResult(assertEq(res, expected), input, res, expected)
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
  testFunction({
    name: "Homer",
    children: [{ name: "Bart" }, { name: "Lisa" }, { name: "Meggie" }]
  }, ['Hi! I am Homer', 'Hi! I am Bart', 'Hi! I am Lisa', 'Hi! I am Meggie'])
]

const exercise = {
  name: 'Esercizio: sono pessimo coi nomi',
  text: `
    <div>
      <p>Scrivi una funzione di nome <code>introduceFamily</code>, che accetta come argomento un oggetto con due campi: "name", "children".</p>
      
      <ul>
        <li>
          <code>name</code> è un campo di tipo stringa
        </li>
        <li>
          <code>children</code> è un campo di tipo array, in cui ogni elemento è a sua volta un oggetto con un campo <code>name</code>.
        </li>
      </ul>

      <p>
        La funzione deve ritornare un\'array di stringhe come "Hi! I am ...", in cui al posto di "..." si trovano i valori del campo 
        "name" dell\'oggetto esterno, e degli elementi all\'interno del campo "children".
      </p>
      
      <p>NOTA: per questo esercizio non è necessario eseguire validazioni sugli input.</p>
      
    </div>
    
    <div>
      <details>
        <summary> Esempio </summary>
        <p>
          <a target="_blank" href=https://babynames.com/blogs/celebrities/all-of-elon-musks-children-so-far>Un esempio a caso</a> 🤨
        </p>
        <p>
          Con input:
        </p>
        
        <pre><code>
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
        </code></pre>
        
        <p><code>introduceFamily(family)</code> deve ritornare l\'array:</p>
        
        <pre><code>
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
        </code></pre>
      </details>
    </div>
  `,
  initialValue: '',
  validation: _validation,
  tests: _tests,
}

new ExercisePageManager().loadExercise(exercise)
