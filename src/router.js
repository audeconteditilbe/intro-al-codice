
const route = () => {
  const { topic, exercise } = searchValues() ?? {}
  // if (searchValues.path) {
  //   window.location.href = `./${searchValues.path}`
  // }
  // else
  if (topic && exercise) {
    window.location.href = `./exercise.html${window.location.search}`
  }
  else {
    window.location.href = './exerciseTree.html'
  }
}

route()
