require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }})

class ExercisePageManager {
  form = document.getElementById('exercise-form')
  title = document.getElementById('exercise-title')
  instructions = document.getElementById('exercise-instructions')
  validationResult = document.getElementById('validation')
  reportResult = document.getElementById('report')
  testResults = document.getElementById('tests')
  resetButton = document.getElementById('reset-button')
  
  target
  initialValue
  validation
  test
  randomTest

  resetValidation () {
    this.validationResult.classList.remove('error')
    this.validationResult.classList.remove('success')
    this.validationResult.innerText = ''
  }
  
  resetTestResults () {
    this.testResults.innerHTML = null
  }
  
  resetReport () {
    this.reportResult.classList.remove('error')
    this.reportResult.classList.remove('success')
    this.reportResult.innerText = ''
  }

  addValidationResult (msg, type) {
    this.validationResult.classList.add(type)  
    this.validationResult.innerText = msg
  }
  
  addTestResult (msg, type) {
    const item = document.createElement('li')
    item.innerText = msg
    item.classList.add(type)
  
    this.testResults.appendChild(item)
  }
  
  addReportItem (msg, type) {
    this.reportResult.classList.add(type)  
    this.reportResult.innerText = msg
  }
  
  onReset(e) {
    e.preventDefault()
    
    const ok = confirm("Sei sicura di voler rirpistinare i valori iniziali?")
    if (ok) {
      this.resetValidation()
      this.resetTestResults()
      this.resetReport()
      window.editor.setValue(this.initialValue)
    }
  }

  onSubmit (e) {
    e.preventDefault()
  
    this.resetValidation()
    this.resetTestResults()
    this.resetReport()
  
    let validationReport = {}
    try {
      validationReport = this.validation(window.editor.getValue())
    } catch (err) {
      validationReport.error = `Il codice ha lanciato un errore:\n${err}`
    }
    const { error: validationError, code } = validationReport
    if (validationError) {
      this.addValidationResult(validationError, 'error')
    }
    
    if (!code) {
      return
    }

    let report = this.test(code).reduce((acc, { msg, status }) => {
      status === 'error' && acc.error.push(msg)
      status === 'success' && acc.success.push(msg)
      status === 'invalid' && acc.invalid.push(msg)
      return acc
    }, { error: [], success: [], invalid: [] })
    let oks = report.success.length
    let tot = report.error.length + report.success.length + report.invalid.length
    this.addReportItem(`Report: ${oks} test passati su ${tot}`, oks === tot ? 'success' : 'error')
    report.invalid.map(({ msg }) => this.addReportItem(msg, 'error'))
    report.error.map(({ msg, status }) => this.addReportItem(msg, status))

    report = this.randomTest(code).reduce((acc, { msg, status }) => {
      status === 'error' && acc.error.push(msg)
      status === 'success' && acc.success.push(msg)
      status === 'invalid' && acc.invalid.push(msg)
      return acc
    }, { error: [], success: [], invalid: [] })
    oks = report.success.length
    tot = report.error.length + report.success.length + report.invalid.length
    this.addReportItem(`Report: ${oks} test automatici passati su ${tot}`, oks === tot ? 'success' : 'error')
    report.invalid.map(({ msg }) => this.addReportItem(msg, 'error'))
    report.error.map(({ msg, status }) => this.addReportItem(msg, status))
  }
  
  loadExercise ({ name, text, initialValue, validation: _validation, test: _test, randomTest: _randomTest, target }) {
    require(["vs/editor/editor.main"], function () {
      window.editor = monaco.editor.create(
        document.getElementById('container'),
        { value: initialValue, language: 'javascript', theme: 'vs-dark', automaticLayout: true, scrollBeyondLastLine: false }
      )
    })
    
    this.resetValidation()
    this.resetTestResults()
    this.resetReport()
    this.title.innerText = name
    this.instructions.innerHTML = text
    this.target = target
    this.initialValue = initialValue
    this.validation = _validation
    this.test = _test
    this.randomTest = _randomTest
    
    this.form.addEventListener('submit', this.onSubmit.bind(this))
    this.resetButton.addEventListener('click', this.onReset.bind(this))
  }
}
