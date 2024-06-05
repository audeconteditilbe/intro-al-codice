
const initialize = () => {
  const { topic, exercise } = searchValues()
  const base = 'intro-al-codice'
  const [prefix,] = window.location.pathname.split(base)

  if (topic && exercise) {
    const exercisePath = `${prefix}${base}/src/catalogue/${topic}/${exercise}.js`
    const script = document.createElement('script')
    script.setAttribute('src', exercisePath)
    document.body.appendChild(script)
    return
  }
}

initialize()
