
const initialize = () => {
  const searchValues = Object.fromEntries(window.location.search.replace(/^\?/, '').split('&').map((chunk) => chunk.split('=')))

  if (searchValues.topic && searchValues.exercise) {
    const exercisePath = `./catalogue/${searchValues.topic}/${searchValues.exercise}.js`
    const script = document.createElement('script')
    script.setAttribute('src', exercisePath)
    document.body.appendChild(script)
    return
  }
}

initialize()
