
const searchValues = () => Object.fromEntries(
  window.location.search.replace(/^\?/, '').split('&').map((chunk) => chunk.split('='))
)