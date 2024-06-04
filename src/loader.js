
const initialize = () => {
  const searchValues = Object.fromEntries(window.location.search.replace(/^\?/, '').split('&').map((chunk) => chunk.split('=')))
  const base = 'intro-al-codice'
  const [prefix,] = window.location.pathname.split(base)

  if (searchValues.topic && searchValues.exercise) {
    const exercisePath = `${prefix}${base}/src/catalogue/${searchValues.topic}/${searchValues.exercise}.js`
    console.log(prefix, exercisePath)
    const script = document.createElement('script')
    script.setAttribute('src', exercisePath)
    document.body.appendChild(script)
    return
  }
}

initialize()
