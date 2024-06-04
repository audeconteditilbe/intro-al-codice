function introduce (name)
{
  return 'Hi! I am ' + name
}
function _target (parent)
{
  let result = [introduce(parent.name)]
  for (child of parent.children)
  {
    result.push(introduce(child.name))
  }
  return result
}

const _solution = `\
function introduce (name)
{
  return 'Hi! I am ' + name
}
function introduceFamily (parent)
{
  let result = [introduce(parent.name)]
  for (child of parent.children)
  {
    result.push(introduce(child.name))
  }
  return result
}`

function _validation (codeStr) {
  let error
  let code
  try {
    code = new Function (codeStr + '\nreturn introduceFamily')
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
  const introduceFamily = code()
  return [
    compare(
      introduceFamily,
      _target,
      {
        name: 'Elon Musk',
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
      }
    ),
    compare(
      introduceFamily,
      _target,
      { name: 'Bob', children: [] }
    ),
    compare(
      introduceFamily,
      _target,
      { name: 'Bruce', children: [{ name: 'Chettina' }] }
    ),
    compare(
      introduceFamily,
      _target,
      { name: 'Homer', children: [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Meggie' }] }
    )
  ]
}
const _randomTest = (code) => {
  const introduceFamily = code()

  return Array(100).fill(0).map(() => compare(introduceFamily, _target, {
    name: rnd('string'),
    children: [
      Array(rnd('integer', 0, 10))
        .fill(0)
        .map(() => ({ name: rnd('string') }))
    ]
  }))
}

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
  solution: _solution,
  validation: _validation,
  test: _test,
  randomTest: _randomTest,
}

new ExercisePageManager().loadExercise(exercise)
