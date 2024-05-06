require.config({ paths: { 'vs': 'https://unpkg.com/monaco-editor@latest/min/vs' }})

class ExercisePageManager {
  form = document.getElementById('exercise-form')
  title = document.getElementById('exercise-title')
  instructions = document.getElementById('exercise-instructions')
  validationResult = document.getElementById('validation')
  reportResult = document.getElementById('report')
  testResults = document.getElementById('tests')
  resetButton = document.getElementById('reset-button')
  
  initialValue
  validation
  tests = []

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
  
    const { error, code } = validationReport
  
    if (error) {
      this.addValidationResult(error, 'error')
    }
    // else if (success) {
    //   this.addValidationResult(success, 'success')
    // }
    
    if (code) {
      let passed = 0
      
      this.tests.forEach((test) => {
        
        let testReport = {}
        try {
          testReport = test(code)
        } catch (err) {
          testReport.error = `Il codice ha lanciato un errore:\n${err}`
        }
        const { error, success } = testReport
        
        if (error) {
          this.addTestResult(error, 'error')
        }
        else {
          if (success) {
            this.addTestResult(success, 'success')
          }
          passed += 1
        }
      })
  
      this.addReportItem(
        `Report: ${passed} test passati su ${this.tests.length}`,
        passed === this.tests.length ? 'success' : 'error'
      )
    }
  }
  
  loadExercise ({name, text, initialValue, validation: _validation, tests: _tests}) {
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
    this.validation = _validation
    this.tests = _tests
    this.initialValue = initialValue
    
    this.form.addEventListener('submit', this.onSubmit.bind(this))
    this.resetButton.addEventListener('click', this.onReset.bind(this))
  }
}
