
const route = () => {
  const searchValues = Object.fromEntries(window.location.search.replace(/^\?/, '').split('&').map((chunk) => chunk.split('=')))
  
  if (searchValues.path) {
    window.location.href = `./catalogue/${searchValues.path}/index.js`
  }
  else if (searchValues.topic && searchValues.exercise) {
    window.location.href = `./catalogue/${searchValues.topic}/${searchValues.exercise}/index.js`
  }
  else {
    window.location.href = './home.html'
  }
}

route()
