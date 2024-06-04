
const route = () => {
  const searchValues = Object.fromEntries(window.location.search.replace(/^\?/, '').split('&').map((chunk) => chunk.split('=')))
  // if (searchValues.path) {
  //   window.location.href = `./${searchValues.path}`
  // }
  // else
  if (searchValues.topic && searchValues.exercise) {
    window.location.href = `./exercise.html${window.location.search}`
  }
  else {
    window.location.href = './exerciseTree.html'
  }
}

route()
