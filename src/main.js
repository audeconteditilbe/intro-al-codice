const form = document.getElementById('exercise-form')
const title = document.getElementById('exercise-title')
const instructions = document.getElementById('exercise-instructions')
const codeblock = document.getElementById('exercise-code-block')
const validationResult = document.getElementById('validation')
const reportResult = document.getElementById('report')
const testResults = document.getElementById('tests')
const resetButton = document.getElementById('reset-button')

let init = {}
let validation
let tests = []

// Use tab inside textarea
codeblock.addEventListener('keydown', function (e) {
  if (e.key === 'Tab') {
    e.preventDefault()
    const tab = "  "
    const start = this.selectionStart
    const end = this.selectionEnd

    this.value = this.value.substring(0, start) + tab + this.value.substring(end)
    this.selectionStart = this.selectionEnd = start + tab.length
  }
})

function resetValidation () {
  validationResult.classList.remove('error')
  validationResult.classList.remove('success')
  validationResult.innerText = ''
}

function resetTestResults () {
  testResults.innerHTML = null
}

function resetReport () {
  reportResult.classList.remove('error')
  reportResult.classList.remove('success')
  reportResult.innerText = ''
}

function addValidationResult (msg, type) {
  validationResult.classList.add(type)  
  validationResult.innerText = msg
}

function addTestResult (msg, type) {
  const item = document.createElement('li')
  item.innerText = msg
  item.classList.add(type)

  testResults.appendChild(item)
}

function addReportItem (msg, type) {
  reportResult.classList.add(type)  
  reportResult.innerText = msg
}

function onReset(e) {
  e.preventDefault()
  
  const {name, text, initialValue, validation, tests} = init

  const ok = confirm("Sei sicura di voler rirpistinare i valori iniziali?")
  if (ok) {
    loadExercise({name, text, initialValue, validation, tests})
  }
}

function onsubmit (e) {
  e.preventDefault()

  resetValidation()
  resetTestResults()
  resetReport()

  let validationReport = {}
  try {
    validationReport = validation(codeblock.value)
  } catch (err) {
    validationReport.error = `Il codice ha lanciato un errore:\n${err}`
  }

  const { error, success, code } = validationReport

  if (error) {
    addValidationResult(error, 'error')
  }
  else if (success) {
    addValidationResult(success, 'success')
  }
  
  if (code) {
    let passed = 0
    
    tests.forEach((test) => {
      
      let testReport = {}
      try {
        testReport = test(code)
      } catch (err) {
        testReport.error = `Il codice ha lanciato un errore:\n${err}`
      }
      const { error, success } = testReport
      
      if (error) {
        addTestResult(error, 'error')
      }
      else {
        if (success) {
          addTestResult(success, 'success')
        }
        passed += 1
      }
    })

    addReportItem(`Report: ${passed} test passati su ${tests.length}`, passed === tests.length ? 'success' : 'error')
  }
}

function loadExercise ({name, text, initialValue, validation: _validation, tests: _tests}) {
  resetValidation()
  resetTestResults()
  resetReport()
  
  title.innerText = name
  instructions.innerText = text
  codeblock.value = initialValue
  validation = _validation
  tests = _tests

  init = { name, text, initialValue, validation, tests }
  
  form.addEventListener('submit', onsubmit)
  resetButton.addEventListener('click', onReset)
}
